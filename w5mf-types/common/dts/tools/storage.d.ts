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
