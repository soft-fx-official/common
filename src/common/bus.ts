type TBusCallback = (args: { [name: string]: any }) => void

type TBusEvents = { [name: string]: Array<TBusCallback> }

interface IBus {
  events: TBusEvents
  on: (name: string, callback: TBusCallback) => void
  say: (name: string, args: object) => void
}

// NOTE: Folded tires for consecutive calls?
class Bus implements IBus {
  events: TBusEvents = {}

  constructor(events?: TBusEvents) {
    this.events = events || {}
  }

  on = (name: string, callback: TBusCallback): void => {
    if (!(name in this.events)) this.events[name] = []
    this.events[name].push(callback)
  }

  say = (name: string, args: object): void => {
    if (!(name in this.events)) return
    this.events[name].forEach((callback: TBusCallback) => callback(args))
  }
}

export default Bus
export type { IBus, TBusCallback, TBusEvents }
