declare type TRouteData = {
    [name: string]: {
        [name: string]: string[];
    };
};
declare const parseRoute: (route: string) => TRouteData;
interface IUpdateRoute {
    app: string;
    key: string;
    values: string[];
}
declare const updateRoute: ({ app, key, values }: IUpdateRoute, isReset?: boolean) => void;
interface IRemoveRoute {
    app: string;
}
declare const removeRoute: ({ app }: IRemoveRoute) => void;
export { parseRoute, removeRoute, updateRoute };
export type { IRemoveRoute, IUpdateRoute, TRouteData };
