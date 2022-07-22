import { get, set, unset } from 'lodash'

type TStorageValue =
  | string
  | number
  | boolean
  | null
  | Array<TStorageValue>
  | { [key: string]: TStorageValue }

interface IStorage {
  setItem: (key: string, value: string) => void
  getItem: (key: string) => string | null
  clear: () => void
}

interface IBaseStorage {
  readonly namespace: string

  get: (path: string) => TStorageValue
  set: (path: string, value: TStorageValue) => this
  remove: (path: string) => this
  clear: () => this
}

// NOTE: The data structure may change over time in new versions of the application.
// Needs to be improved!
class BaseStorage implements IBaseStorage {
  readonly namespace: string

  protected storage: IStorage

  protected data: object

  constructor(namespace: string, storage: IStorage) {
    this.namespace = namespace
    this.storage = storage
    this.data = {}
    try {
      this.data = JSON.parse(this.storage.getItem(namespace) as string) || {}
    } catch (e) {
      console.info('[ERROR][STORAGE]: ', e)
      this.clear()
    }
  }

  get(path: string): TStorageValue {
    return get(this.data, path, null)
  }

  set(path: string, value: TStorageValue): this {
    set(this.data, path, value)
    try {
      this.storage.setItem(this.namespace, JSON.stringify(this.data))
    } catch (e) {
      console.info('[ERROR][STORAGE]: ', e)
    }
    return this
  }

  remove(path: string): this {
    unset(this.data, path)
    try {
      this.storage.setItem(this.namespace, JSON.stringify(this.data))
    } catch (e) {
      console.info('[ERROR][STORAGE]: ', e)
    }
    return this
  }

  clear(): this {
    this.data = {}
    this.storage.clear()
    return this
  }
}

export { BaseStorage as Storage }
export type { IBaseStorage, IStorage, TStorageValue }
