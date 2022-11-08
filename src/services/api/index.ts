import { IInitStorageR } from '../../inits'
import { Api, ApiConfig, ContentType, RequestParams } from './main'

interface SecurityData {
  Authorization: string
}

interface IInitApi {
  main: {
    baseUrl: string
  }
}

interface IInitApiR {
  main: Api<SecurityData>['api'] & Api<SecurityData>['account']
  setSecurityData: (token: string) => void
  setClientToken: (clientId: string, clientSecret: string) => void
}

const securityWorker = (securityData: SecurityData | null): RequestParams | undefined => {
  if (!securityData) {
    return undefined
  }
  return { headers: securityData } as any
}

class Rest {
  readonly apiClient: Api<SecurityData>

  private clientId: string | null
  private clientSecret: string | null

  readonly onApiTokenChange: (token: string | null) => void
  readonly onClientTokenChange: (clientId: string, clientSecret: string) => void
  readonly onServerError: (response: Response) => void

  constructor(
    config: ApiConfig<SecurityData>,
    tokenManager: TokenManager,
    onServerError: (response: Response) => void,
  ) {
    this.apiClient = new Api({
      baseUrl: config.baseUrl,
      securityWorker: securityWorker,
      customFetch: this.customFetch(),
    })
    this.clientId = tokenManager.clientId
    this.clientSecret = tokenManager.clientSecret
    this.onApiTokenChange = tokenManager.onApiTokenChange
    this.onClientTokenChange = tokenManager.onClientTokenChange
    this.setSecurityData(tokenManager.apiToken)
    this.onServerError = onServerError
  }

  private customFetch =
    (isIntercepless?: boolean) =>
    (...fetchParams: Parameters<typeof fetch>): Promise<Response> =>
      fetch(...fetchParams).then(response => {
        if (!response.ok && response.status > 401) {
          this.onServerError(response)
        }

        if (!isIntercepless && response.status === 401) {
          return this.refreshSecurityToken()
            .then(() =>
              this.customFetch(true)(fetchParams[0], {
                ...fetchParams[1],
                headers: {
                  ...((fetchParams[1]?.headers as Record<string, string>) || {}),
                  ...((this.apiClient.getSecurityData() as any) || {}),
                },
              }),
            )
            .catch(() => response)
        }
        return response
      })

  public setSecurityData = (token: string | null): void => {
    this.apiClient.setSecurityData(token ? { Authorization: `Bearer ${token}` } : null)
    this.onApiTokenChange(token)
  }

  public setClientToken = (clientId: string, clientSecret: string) => {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.onClientTokenChange(clientId, clientSecret)
  }

  private refreshSecurityToken = (): Promise<void> => {
    if (!this.clientId || !this.clientSecret) return Promise.reject()

    return this.apiClient.api
      .oauthApiTokenCreate(
        { grant_type: 'client_credentials' },
        {
          headers: {
            Authorization: `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
          },
          type: ContentType.UrlEncoded,
        },
      )
      .then(({ data }) => {
        this.setSecurityData(data.access_token)
      })
  }
}

const TOKEN_KEY = 'apiToken'
const CLIENT_ID = 'clientId'
const CLIENT_SECRET = 'clientSecret'

type TokenManager = {
  apiToken: string | null
  clientId: string | null
  clientSecret: string | null
  onApiTokenChange: (token: string | null) => void
  onClientTokenChange: (clientId: string, clientSecret: string) => void
}

const makeTokenManager = (storage: IInitStorageR): TokenManager => {
  const apiToken = storage.local.main.get(TOKEN_KEY)
  const clientId = storage.local.main.get(CLIENT_ID)
  const clientSecret = storage.local.main.get(CLIENT_SECRET)

  const onApiTokenChange = (token: string | null) => {
    storage.local.main.set(TOKEN_KEY, token)
  }

  const onClientTokenChange = (clientId: string, clientSecret: string) => {
    storage.local.main.set(CLIENT_ID, clientId)
    storage.local.main.set(CLIENT_SECRET, clientSecret)
  }

  return {
    apiToken: apiToken ? apiToken.toString() : null,
    clientId: clientId ? clientId.toString() : null,
    clientSecret: clientSecret ? clientSecret.toString() : null,
    onApiTokenChange,
    onClientTokenChange,
  }
}

export { makeTokenManager, Rest }
export type { IInitApi, IInitApiR }
