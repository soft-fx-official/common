import { get, merge, set, unset } from 'lodash'

type TStorageValue = any

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
      this.syncDataWithStorage()
    } catch (e) {
      console.info('[STORAGE][ERROR]: ', e)
      this.clear()
    }
  }

  get(path: string): TStorageValue {
    console.info(`[STORAGE][GET]: ${path}`)

    try {
      this.syncDataWithStorage()
    } catch (e) {
      console.info('[STORAGE][ERROR]: ', e)
    }

    return get(this.data, path, null)
  }

  set(path: string, value: TStorageValue): this {
    console.info(`[STORAGE][SET]: ${path}`)
    set(this.data, path, value)
    try {
      this.syncDataWithStorage()
    } catch (e) {
      console.info('[STORAGE][ERROR]: ', e)
    }
    return this
  }

  remove(path: string): this {
    console.info(`[STORAGE][REMOVE]: ${path}`)
    try {
      this.syncDataWithStorage()

      unset(this.data, path)

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

  protected syncDataWithStorage() {
    const dataFromStorage = JSON.parse(this.storage.getItem(this.namespace) as string) || {}

    this.data = merge(dataFromStorage, this.data)

    this.storage.setItem(this.namespace, JSON.stringify(this.data))
  }
}

export { BaseStorage as Storage }
export type { IBaseStorage, IStorage, TStorageValue }
