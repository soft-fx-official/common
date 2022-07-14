type TBusValues = number | string | Array<TBusValues> | { [name: string]: TBusValues }

// NOTE: any?
type TBusArgs = { [name: string]: any }

type TBusGetData = () => TBusValues

type TBusData = { [name: string]: Array<TBusGetData> }

type TBusEventCallback = (args: TBusArgs) => void

type TBusEvents = { [name: string]: Array<TBusEventCallback> }

interface IBus {
  events: TBusEvents
  data: TBusData
  on: (name: string, callback: TBusEventCallback) => void
  say: (name: string, args: TBusArgs) => void
  save: (name: string, getData: TBusGetData) => void
  get: (name: string, dataDefault: TBusValues | null) => TBusValues | null
  getAll: (name: string) => Array<TBusValues>
}

// NOTE: Folded tires for consecutive calls?
class Bus implements IBus {
  events: TBusEvents = {}

  data: TBusData = {}

  constructor(events?: TBusEvents, data?: TBusData) {
    this.events = events || {}
    this.data = data || {}
  }

  on = (name: string, callback: TBusEventCallback): void => {
    if (!(name in this.events)) this.events[name] = []
    this.events[name].push(callback)
  }

  say = (name: string, args: TBusArgs): void => {
    if (!(name in this.events)) return
    this.events[name].forEach((callback: TBusEventCallback) => callback(args))
  }

  save = (name: string, getData: TBusGetData): void => {
    if (!(name in this.data)) this.data[name] = []
    this.data[name].push(getData)
  }

  get = (name: string, dataDefault: TBusValues | null = null): TBusValues | null => {
    if (!(name in this.data)) return dataDefault
    return this.data[name][this.data[name].length - 1]()
  }

  getAll = (name: string): Array<TBusValues> => {
    if (!(name in this.data)) return []
    return Array.from(this.data[name], getData => getData())
  }
}

export default Bus
export type { IBus, TBusValues, TBusArgs, TBusGetData, TBusData, TBusEventCallback, TBusEvents }
