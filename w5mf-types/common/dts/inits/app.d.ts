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
}
declare function init({ storage, i18next, state, bus, api }: IInitApp, inits: ({ storage, i18next, state, bus, api }: IInitApp) => any): Promise<void>;
export { init as initApp };
export type { IInitApp };
