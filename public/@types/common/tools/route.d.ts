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
declare const updateRoute: ({ app, key, values }: IUpdateRoute) => void;
export { parseRoute, updateRoute };
export type { IUpdateRoute, TRouteData };
