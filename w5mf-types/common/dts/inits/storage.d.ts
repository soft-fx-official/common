import { IBaseStorage } from '../tools/storage';
interface IInitR {
    local: {
        main: IBaseStorage;
        app: IBaseStorage;
    };
    session: {
        main: IBaseStorage;
        app: IBaseStorage;
    };
}
declare function init(name: string): IInitR;
export { init as initStorage };
export type { IInitR as IInitStorageR };
