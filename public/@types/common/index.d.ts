declare module 'common/hooks' {
import { useCreateForm } from './useCreateForm';
import { useDynamicScript } from './useDynamicScript';
import { useHttpErrorHandler } from './useHttpErrorHandler';
import { useKey } from './useKey';
import { useTimer } from './useTimer';
export { useCreateForm, useDynamicScript, useHttpErrorHandler, useKey, useTimer };

import { CriteriaMode } from 'react-hook-form';
declare type OnSubmit = (data: any) => Promise<any>;
interface SubmitCallback {
    onSuccess: (result: any, data: any) => void;
    onError: (error: any, fn: (error: any) => void) => void;
}
declare const useCreateForm: (yupObject: any, mode?: any, criteriaMode?: CriteriaMode) => {
    isLoad: any;
    control: import("react-hook-form").Control<import("react-hook-form").FieldValues, object>;
    errors: import("react-hook-form").FieldErrorsImpl<import("react-hook-form").DeepRequired<import("react-hook-form").FieldValues>>;
    submit: (onSubmit: OnSubmit, callbacks?: SubmitCallback) => Promise<void>;
    isValid: boolean;
    getValues: import("react-hook-form").UseFormGetValues<import("react-hook-form").FieldValues>;
    setValue: import("react-hook-form").UseFormSetValue<import("react-hook-form").FieldValues>;
    clearErrors: import("react-hook-form").UseFormClearErrors<import("react-hook-form").FieldValues>;
    watch: import("react-hook-form").UseFormWatch<import("react-hook-form").FieldValues>;
    getFieldState: import("react-hook-form").UseFormGetFieldState<import("react-hook-form").FieldValues>;
    trigger: import("react-hook-form").UseFormTrigger<import("react-hook-form").FieldValues>;
    resetField: import("react-hook-form").UseFormResetField<import("react-hook-form").FieldValues>;
    reset: import("react-hook-form").UseFormReset<import("react-hook-form").FieldValues>;
    unregister: import("react-hook-form").UseFormUnregister<import("react-hook-form").FieldValues>;
    register: import("react-hook-form").UseFormRegister<import("react-hook-form").FieldValues>;
    setFocus: import("react-hook-form").UseFormSetFocus<import("react-hook-form").FieldValues>;
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

declare const useKey: (key: string, cb: (event: KeyboardEvent) => void) => void;
export { useKey };

declare const useTimer: (start: number, onStop: () => void, tactMs?: number) => number;
export { useTimer };

};

declare module 'common/inits' {
import { i18n } from 'i18next';
import { IBus } from '../tools';
import { IInitStateR } from './state';
import { IInitStorageR } from './storage';
interface IInitEvent {
    storage: IInitStorageR;
    i18next: i18n;
    state: IInitStateR;
    bus: IBus;
}
declare function init({ storage, i18next, state, bus }: IInitEvent, events: ({ storage, i18next, state, bus }: IInitEvent) => void): void;
export { init as initEvents };
export type { IInitEvent };

import { IInitEvent, initEvents } from './events';
import { IInitLocale, initLocale } from './locales';
import { IInitState, IInitStateR, initState } from './state';
import { IInitStorage, IInitStorageR, initStorage } from './storage';
export { initEvents, initLocale, initState, initStorage };
export type { IInitEvent, IInitLocale, IInitState, IInitStateR, IInitStorage, IInitStorageR };

import { i18n } from 'i18next';
interface IInit {
    debug: boolean;
    fallbackLng: string;
    supportedLngs: Array<string>;
    resources: {
        [name: string]: {
            translate: string;
        };
    };
}
declare function init(config: IInit): i18n;
export { init as initLocale };
export type { IInit as IInitLocale };

import { TRouteData } from '../tools';
import { IInitStorageR } from './storage';
interface IMain {
    isDarkTheme: boolean;
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
    app: App;
}
declare class Main implements IMain {
    isDarkTheme: boolean;
    route: string;
    constructor({ isDarkTheme, route }: {
        isDarkTheme?: boolean;
        route?: string;
    });
    toggleDarkTheme: () => void;
    setRoute: (route: string) => void;
    getRouteData: () => TRouteData;
}
declare class App implements IApp {
}
declare function init(storage: IInitStorageR, state: IApp): IInitR;
export { init as initState };
export type { IInit as IInitState, IInitR as IInitStateR };

import { IBaseStorage, IStorage } from '../tools/storage';
interface IInit {
    main: {
        storage: IStorage;
    };
    app: {
        name: string;
        storage: IStorage;
    };
}
interface IInitR {
    main: IBaseStorage;
    app: IBaseStorage;
}
declare function init(args: IInit): IInitR;
export { init as initStorage };
export type { IInit as IInitStorage, IInitR as IInitStorageR };

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
import { IRemoveRoute, IUpdateRoute, parseRoute, removeRoute, TRouteData, updateRoute } from './route';
import { IBaseStorage, IStorage, Storage, TStorageValue } from './storage';
export { Bus, loadDynamicComponent, parseRoute, removeRoute, Storage, updateRoute };
export type { IBaseStorage, IBus, IRemoveRoute, IStorage, IUpdateRoute, TBusArgs, TBusData, TBusEventCallback, TBusEvents, TBusGetData, TBusValues, TRouteData, TStorageValue, };

declare function loadDynamicComponent(scope: string, module: string): () => Promise<any>;
export { loadDynamicComponent };

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
