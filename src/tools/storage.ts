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
      console.info('[STORAGE][ERROR]: ', e)
      this.clear()
    }
  }

  get(path: string): TStorageValue {
    console.info(`[STORAGE][GET]: ${path}`)
    return get(this.data, path, null)
  }

  set(path: string, value: TStorageValue): this {
    console.info(`[STORAGE][SET]: ${path}`)
    set(this.data, path, value)
    try {
      this.storage.setItem(this.namespace, JSON.stringify(this.data))
    } catch (e) {
      console.info('[STORAGE][ERROR]: ', e)
    }
    return this
  }

  remove(path: string): this {
    console.info(`[STORAGE][REMOVE]: ${path}`)
    unset(this.data, path)
    try {
      this.storage.setItem(this.namespace, JSON.stringify(this.data))
    } catch (e) {
      console.info('[STORAGE][ERROR]: ', e)
    }
    return this
  }

  clear(): this {
    console.info(`[STORAGE][CLEAR]`)
    this.data = {}
    this.storage.clear()
    return this
  }
}

export { BaseStorage as Storage }
export type { IBaseStorage, IStorage, TStorageValue }
