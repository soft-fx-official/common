import { i18n } from 'i18next';
import { IBus } from '../tools';
import { IInitStateR } from './state';
import { IInitStorageR } from './storage';
interface IInitEvent {
    storage: IInitStorageR;
    i18next: i18n;
    state: IInitStateR;
    bus: IBus;
}
declare function init({ storage, i18next, state, bus }: IInitEvent, events: ({ storage, i18next, state, bus }: IInitEvent) => void): void;
export { init as initEvents };
export type { IInitEvent };
