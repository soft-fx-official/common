export interface IModule {
    url: string;
    name: string;
    module: string;
}
export declare class Module implements IModule {
    url: string;
    name: string;
    module: string;
    constructor(url: string, name: string, module: string);
}
