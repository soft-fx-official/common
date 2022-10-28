import { IInitStorageR } from '../../inits';
import { Api, ApiConfig } from './main';
interface SecurityData {
    Authorization: string;
}
interface IInitApi {
    main: {
        baseUrl: string;
    };
}
interface IInitApiR {
    main: Api<SecurityData>['api'] & Api<SecurityData>['account'];
    setSecurityData: (token: string) => void;
    setClientToken: (clientId: string, clientSecret: string) => void;
}
declare class Rest {
    readonly apiClient: Api<SecurityData>;
    private clientId;
    private clientSecret;
    readonly onApiTokenChange: (token: string | null) => void;
    readonly onClientTokenChange: (clientId: string, clientSecret: string) => void;
    readonly onServerError: (response: Response) => void;
    constructor(config: ApiConfig<SecurityData>, tokenManager: TokenManager, onServerError: (response: Response) => void);
    private customFetch;
    setSecurityData: (token: string | null) => void;
    setClientToken: (clientId: string, clientSecret: string) => void;
    private refreshSecurityToken;
}
declare type TokenManager = {
    apiToken: string | null;
    clientId: string | null;
    clientSecret: string | null;
    onApiTokenChange: (token: string | null) => void;
    onClientTokenChange: (clientId: string, clientSecret: string) => void;
};
declare const makeTokenManager: (storage: IInitStorageR) => TokenManager;
export { makeTokenManager, Rest };
export type { IInitApi, IInitApiR };
