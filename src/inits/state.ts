import { makeAutoObservable } from 'mobx'

import { parseRoute, TRouteData } from '../tools'
import { IInitStorageR } from './storage'

interface IMain {
  isDarkTheme: boolean
  isLoader: boolean
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
  app: IApp
}

class Main implements IMain {
  isDarkTheme = true
  isLoader = false
  route = ''

  constructor({ isDarkTheme = true, route = '' }) {
    this.isDarkTheme = isDarkTheme
    this.isLoader = false
    this.route = route

    makeAutoObservable(this)
  }

  toggleDarkTheme = () => {
    this.isDarkTheme = !this.isDarkTheme
  }

  setRoute = (route: string) => {
    this.route = route
  }

  setIsLoader = (isLoader: boolean) => (this.isLoader = isLoader)

  getRouteData = () => parseRoute(this.route)
}

class App implements IApp {}

function init(storage: IInitStorageR, state: IApp, isPrefersDarkMode?: boolean): IInitR {
  const localStorageValue =
    storage.local.main.get('isDarkTheme') || storage.local.app.get('isDarkTheme')

  const isDarkTheme = localStorageValue !== null ? localStorageValue : isPrefersDarkMode

  const main = new Main({
    isDarkTheme: Boolean(isDarkTheme),
    route: window.location.hash,
  })

  return {
    main,
    app: state,
  }
}

export { init as initState }
export type { IInit as IInitState, IInitR as IInitStateR }
