declare type TBusValues = number | string | Array<TBusValues> | {
    [name: string]: any;
};
declare type TBusArgs = {
    [name: string]: any;
};
declare type TBusGetData = () => TBusValues;
declare type TBusData = {
    [name: string]: Array<TBusGetData>;
};
declare type TBusEventCallback = (args?: TBusArgs) => void;
declare type TBusEvents = {
    [name: string]: Array<TBusEventCallback>;
};
interface IBus {
    events: TBusEvents;
    data?: TBusData;
    on: (name: string, callback: TBusEventCallback) => void;
    say: (name: string, args?: TBusArgs) => void;
    save: (name: string, getData: TBusGetData) => void;
    get: (name: string, dataDefault?: TBusValues | null) => TBusValues | null;
    getAll: (name: string) => Array<TBusValues>;
    delete: (target: string | ((key: string) => boolean)) => void;
}
declare class Bus implements IBus {
    events: TBusEvents;
    data: TBusData;
    constructor(events?: TBusEvents, data?: TBusData);
    on: (name: string, callback: TBusEventCallback) => void;
    say: (name: string, args?: TBusArgs) => void;
    save: (name: string, getData: TBusGetData) => void;
    get: (name: string, dataDefault?: TBusValues | null) => TBusValues | null;
    getAll: (name: string) => Array<TBusValues>;
    delete: (target: string | ((key: string) => boolean)) => void;
}
export { Bus };
export type { IBus, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues };
