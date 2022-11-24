import { i18n } from 'i18next';
import { IBus } from '../tools';
import { IInitStateR } from './state';
import { IInitStorageR } from './storage';
interface IInitApp {
    storage: IInitStorageR;
    i18next: i18n;
    state: IInitStateR;
    bus: IBus;
    api: any;
    isRootApp: boolean;
}
declare type TinitApp = (args: IInitApp) => Promise<void>;
declare function init(args: IInitApp, initCurrentApp: TinitApp): Promise<void>;
export { init as initApp };
export type { IInitApp, TinitApp };
