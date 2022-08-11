import { makeAutoObservable } from 'mobx'

import { IInitStorageR } from './storage'

interface IMain {
  isDarkTheme: boolean
}

interface IApp {
  [name: string]: any
}

interface IInit {
  main: IMain
  app: IApp
}

interface IInitR {
  main: Main
  app: App
}

class Main implements IMain {
  isDarkTheme = true

  constructor({ isDarkTheme = true }) {
    this.isDarkTheme = isDarkTheme

    makeAutoObservable(this)
  }

  toggleDarkTheme = () => {
    this.isDarkTheme = !this.isDarkTheme
  }
}

class App implements IApp {}

function init(storage: IInitStorageR, state: IApp): IInitR {
  const main = new Main({
    isDarkTheme: !!storage.main.get('isDarkTheme') || !!storage.app.get('isDarkTheme'),
  })

  return {
    main,
    app: state,
  }
}

export { init as initState }
export type { IInit as IInitState, IInitR as IInitStateR }
