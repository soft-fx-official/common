import { IBaseStorage, IStorage } from '../tools/storage';
interface IInit {
    main: {
        storage: IStorage;
    };
    app: {
        name: string;
        storage: IStorage;
    };
}
interface IInitR {
    main: IBaseStorage;
    app: IBaseStorage;
}
declare function init(args: IInit): IInitR;
export { init as initStorage };
export type { IInit as IInitStorage, IInitR as IInitStorageR };
