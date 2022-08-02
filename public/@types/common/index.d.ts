declare module 'common/hooks' {
import { useCreateForm } from './useCreateForm';
import { useDynamicScript } from './useDynamicScript';
import { useHttpErrorHandler } from './useHttpErrorHandler';
import { useTimer } from './useTimer';
export { useCreateForm, useDynamicScript, useHttpErrorHandler, useTimer };

declare type OnSubmit = (data: any) => Promise<any>;
interface SubmitCallback {
    onSuccess: (result: any) => void;
    onError: (error: any, fn: (error: any) => void) => void;
}
declare const useCreateForm: (yupObject: any, mode?: any) => {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrorsImpl<import("react-hook-form").DeepRequired<import("react-hook-form").FieldValues>>;
    submit: (onSubmit: OnSubmit, callbacks?: SubmitCallback) => Promise<void>;
    isValid: boolean;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
};
export { useCreateForm };

interface IUseDynamicScriptR {
    ready: boolean;
    failed: boolean;
}
declare const useDynamicScript: (url: string) => IUseDynamicScriptR;
export { useDynamicScript };

declare type UseHttpErrorHandlerProps = {
    errorKey?: 'target' | 'code';
    modelFieldDictionary?: Record<string, string>;
};
declare const useHttpErrorHandler: ({ errorKey, modelFieldDictionary, }: UseHttpErrorHandlerProps) => (error: any, setError: (errors: Record<string, string>) => void) => void;
export { useHttpErrorHandler };

declare const useTimer: (start: number, onStop: () => void, tactMs?: number) => number;
export { useTimer };

};

declare module 'common/tools' {
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
}
export { Bus };
export type { IBus, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues };

import { Bus, IBus, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues } from './bus';
import { loadDynamicComponent } from './loadDynamicComponent';
import { IBaseStorage, IStorage, Storage, TStorageValue } from './storage';
export { Bus, loadDynamicComponent, Storage };
export type { IBaseStorage, IBus, IStorage, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues, TStorageValue, };

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
