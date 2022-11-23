import { IStep } from '../models/Step';
import { IBus } from '../tools/bus';
interface IinitWorkStepsArgs {
    isRootApp: boolean;
    appName: string;
    steps?: IStep[];
    bus: IBus;
}
declare function initWorkSteps({ isRootApp, appName, steps, bus }: IinitWorkStepsArgs): void;
export { initWorkSteps };
export type { IinitWorkStepsArgs };
