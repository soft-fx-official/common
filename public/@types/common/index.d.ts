declare module 'common/hooks' {

declare function useCreateForm(yupObject: any, mode?: any): {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrorsImpl<import("react-hook-form").DeepRequired<import("react-hook-form").FieldValues>>;
    submit: (onSubmit: any, callbacks: any) => Promise<void>;
    isValid: boolean;
};
export { useCreateForm };

interface IUseDynamicScriptR {
    ready: boolean;
    failed: boolean;
}
declare const useDynamicScript: (url: string) => IUseDynamicScriptR;
export { useDynamicScript };

declare const useTimer: (start: number, onStop: () => void, tactMs?: number) => number;
export { useTimer };

};

declare module 'common/tools' {
declare type TBusValues = number | string | Array<TBusValues> | {
    [name: string]: TBusValues;
};
declare type TBusArgs = {
    [name: string]: any;
};
declare type TBusGetData = () => TBusValues;
declare type TBusData = {
    [name: string]: Array<TBusGetData>;
};
declare type TBusEventCallback = (args: TBusArgs) => void;
declare type TBusEvents = {
    [name: string]: Array<TBusEventCallback>;
};
interface IBus {
    events: TBusEvents;
    data: TBusData;
    on: (name: string, callback: TBusEventCallback) => void;
    say: (name: string, args: TBusArgs) => void;
    save: (name: string, getData: TBusGetData) => void;
    get: (name: string, dataDefault: TBusValues | null) => TBusValues | null;
    getAll: (name: string) => Array<TBusValues>;
}
declare class Bus implements IBus {
    events: TBusEvents;
    data: TBusData;
    constructor(events?: TBusEvents, data?: TBusData);
    on: (name: string, callback: TBusEventCallback) => void;
    say: (name: string, args: TBusArgs) => void;
    save: (name: string, getData: TBusGetData) => void;
    get: (name: string, dataDefault?: TBusValues | null) => TBusValues | null;
    getAll: (name: string) => Array<TBusValues>;
}
export { Bus };
export type { IBus, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues };


declare function loadDynamicComponent(scope: string, module: string): () => Promise<any>;
export { loadDynamicComponent };

declare type TStorageValue = string | number | boolean | null | Array<TStorageValue> | {
    [key: string]: TStorageValue;
};
interface IStorage {
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => string | null;
    clear: () => void;
}
interface IBaseStorage {
    readonly namespace: string;
    get: (path: string) => TStorageValue;
    set: (path: string, value: TStorageValue) => this;
    remove: (path: string) => this;
    clear: () => this;
}
declare class BaseStorage implements IBaseStorage {
    readonly namespace: string;
    protected storage: IStorage;
    protected data: object;
    constructor(namespace: string, storage: IStorage);
    get(path: string): TStorageValue;
    set(path: string, value: TStorageValue): this;
    remove(path: string): this;
    clear(): this;
}
export { BaseStorage as Storage };
export type { IBaseStorage, IStorage, TStorageValue };

};