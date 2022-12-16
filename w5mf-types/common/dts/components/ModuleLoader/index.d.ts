import React from 'react';
import { IBus } from '../../tools';
interface IModuleLoader {
    url: string;
    scope: string;
    module: string;
    bus: IBus | null;
    onError: (message?: string) => void;
    onLoad: () => void;
    onDone: () => void;
}
declare const ModuleLoader: React.FC<IModuleLoader>;
export { ModuleLoader };
export type { IModuleLoader };
