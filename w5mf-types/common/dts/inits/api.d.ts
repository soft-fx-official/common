import { IInitStorageR } from './storage';
import { IBus } from '../tools/bus';
import { IInitApi, IInitApiR } from '../services/api';
declare function init(config: IInitApi, storage: IInitStorageR, bus: IBus): IInitApiR;
export { init as initApi };
export type { IInitApi, IInitApiR };
