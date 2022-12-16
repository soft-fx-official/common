import { i18n } from 'i18next';
import { IStep } from '../models';
import { IBus } from '../tools';
import { IInitStateR } from './state';
import { IInitStorageR } from './storage';
interface Iconfig {
    appName: string;
    theme: string;
    steps?: IStep[];
    demoAccountStepId?: string;
    startStepId?: string;
    [key: string]: any;
}
interface IInitApp {
    storage: IInitStorageR;
    i18next: i18n;
    state: IInitStateR;
    bus: IBus;
    api: any;
    isRootApp: boolean;
    config: Iconfig;
}
declare type TinitApp = (args: IInitApp) => Promise<void>;
declare function init(args: IInitApp, initCurrentApp: TinitApp): Promise<void>;
export { init as initApp };
export type { Iconfig, IInitApp, TinitApp };
