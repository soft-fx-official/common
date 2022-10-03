import { i18n } from 'i18next'

import { IBus } from '../tools'
import { IInitStateR } from './state'
import { IInitStorageR } from './storage'

interface IInitApp {
  storage: IInitStorageR
  i18next: i18n
  state: IInitStateR
  bus: IBus
  api: any // NOTE: TS
}

async function init(
  { storage, i18next, state, bus, api }: IInitApp,
  inits: ({ storage, i18next, state, bus, api }: IInitApp) => any, // NOTE: TS
) {
  bus.on('changeLanguage', args => i18next.changeLanguage(args?.lng))
  bus.on('toggleDarkTheme', () => {
    state.main.toggleDarkTheme()
    storage.main.set('isDarkTheme', state.main.isDarkTheme)
    storage.app.set('isDarkTheme', state.main.isDarkTheme)
  })
  bus.on('routing', args => {
    state.main.setRoute(args?.route)
  })
  await inits({ storage, i18next, state, bus, api })
}

export { init as initApp }
export type { IInitApp }
