import { IInitApi, IInitApiR } from '../services/api';
import { IBus } from '../tools/bus';
import { IInitStorageR } from './storage';
declare function init(config: IInitApi, storage: IInitStorageR, bus: IBus): IInitApiR;
export { init as initApi };
export type { IInitApi, IInitApiR };
