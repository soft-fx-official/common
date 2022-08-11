import { IBaseStorage, IStorage, Storage } from '../tools/storage'

interface IInit {
  main: {
    storage: IStorage
  }
  app: {
    name: string
    storage: IStorage
  }
}

interface IInitR {
  main: IBaseStorage
  app: IBaseStorage
}

function init(args: IInit): IInitR {
  const main = new Storage('main', args.main.storage)
  const app = new Storage(args.app.name, args.app.storage)

  return {
    main,
    app,
  }
}

export { init as initStorage }
export type { IInit as IInitStorage, IInitR as IInitStorageR }
