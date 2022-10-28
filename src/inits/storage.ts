import { IBaseStorage, IStorage, Storage } from '../tools/storage'

interface IInitR {
  local: {
    main: IBaseStorage
    app: IBaseStorage
  }
  session: {
    main: IBaseStorage
    app: IBaseStorage
  }
}

function init(name: string): IInitR {
  const local = {
    main: new Storage('main', window.localStorage),
    app: new Storage(name, window.localStorage),
  }

  const session = {
    main: new Storage('main', window.sessionStorage),
    app: new Storage(name, window.sessionStorage),
  }

  return { local, session }
}

export { init as initStorage }
export type { IInitR as IInitStorageR }
