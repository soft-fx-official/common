import { i18n } from 'i18next'
import { autorun, set, toJS } from 'mobx'

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
    storage.local.main.set('isDarkTheme', state.main.isDarkTheme)
  })
  bus.on('routing', args => {
    state.main.setRoute(args?.route)
  })

  const sessionState = storage.session.app.get('state')
  // @ts-ignore
  if (sessionState) set(state.app, sessionState)
  autorun(() => storage.session.app.set('state', toJS(state.app)))

  await inits({ storage, i18next, state, bus, api })
}

export { init as initApp }
export type { IInitApp }
