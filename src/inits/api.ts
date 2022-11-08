import { IInitApi, IInitApiR, makeTokenManager, Rest } from '../services/api'
import { IBus } from '../tools/bus'
import { IInitStorageR } from './storage'

function init(config: IInitApi, storage: IInitStorageR, bus: IBus): IInitApiR {
  const rest = new Rest(
    { baseUrl: config.main.baseUrl },
    makeTokenManager(storage),
    (response: Response) => {
      bus.say('serverError', response)
    },
  )

  return {
    main: { ...rest.apiClient.api, ...rest.apiClient.account },
    setSecurityData: rest.setSecurityData,
    setClientToken: rest.setClientToken,
  }
}

export { init as initApi }
export type { IInitApi, IInitApiR }
