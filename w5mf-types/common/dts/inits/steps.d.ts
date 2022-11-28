import { IBus } from '../tools/bus';
import { Iconfig } from './app';
import { IInitStorageR } from './storage';
interface IinitWorkStepsArgs {
    isRootApp: boolean;
    config: Iconfig;
    bus: IBus;
    storage: IInitStorageR;
}
declare function initWorkSteps(args: IinitWorkStepsArgs): void;
export { initWorkSteps };
export type { IinitWorkStepsArgs };
