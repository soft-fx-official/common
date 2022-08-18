import { makeAutoObservable } from 'mobx'

import { parseRoute, TRouteData } from '../tools'
import { IInitStorageR } from './storage'

interface IMain {
  isDarkTheme: boolean
  route: string
  toggleDarkTheme: () => void
  setRoute: (route: string) => void
  getRouteData: () => TRouteData
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
  route = ''

  constructor({ isDarkTheme = true, route = '' }) {
    this.isDarkTheme = isDarkTheme
    this.route = route

    makeAutoObservable(this)
  }

  toggleDarkTheme = () => {
    this.isDarkTheme = !this.isDarkTheme
  }

  setRoute = (route: string) => {
    this.route = route
  }

  getRouteData = () => parseRoute(this.route)
}

class App implements IApp {}

function init(storage: IInitStorageR, state: IApp): IInitR {
  const main = new Main({
    isDarkTheme: !!storage.main.get('isDarkTheme') || !!storage.app.get('isDarkTheme'),
    route: window.location.hash,
  })

  return {
    main,
    app: state,
  }
}

export { init as initState }
export type { IInit as IInitState, IInitR as IInitStateR }
