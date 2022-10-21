import { TRouteData } from '../tools';
import { IInitStorageR } from './storage';
interface IMain {
    isDarkTheme: boolean;
    isLoader: boolean;
    route: string;
    toggleDarkTheme: () => void;
    setRoute: (route: string) => void;
    getRouteData: () => TRouteData;
}
interface IApp {
    [name: string]: any;
}
interface IInit {
    main: IMain;
    app: IApp;
}
interface IInitR {
    main: Main;
    app: IApp;
}
declare class Main implements IMain {
    isDarkTheme: boolean;
    isLoader: boolean;
    route: string;
    constructor({ isDarkTheme, route }: {
        isDarkTheme?: boolean;
        route?: string;
    });
    toggleDarkTheme: () => void;
    setRoute: (route: string) => void;
    setIsLoader: (isLoader: boolean) => boolean;
    getRouteData: () => TRouteData;
}
declare function init(storage: IInitStorageR, state: IApp, isPrefersDarkMode?: boolean): IInitR;
export { init as initState };
export type { IInit as IInitState, IInitR as IInitStateR };
