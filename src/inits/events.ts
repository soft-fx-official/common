import { i18n } from 'i18next'

import { IBus } from '../tools'
import { IInitStateR } from './state'
import { IInitStorageR } from './storage'

interface IInitEvent {
  storage: IInitStorageR
  i18next: i18n
  state: IInitStateR
  bus: IBus
}

function init(
  { storage, i18next, state, bus }: IInitEvent,
  events: ({ storage, i18next, state, bus }: IInitEvent) => void,
): void {
  bus.on('changeLanguage', args => i18next.changeLanguage(args?.lng))
  bus.on('toggleDarkTheme', () => {
    state.main.toggleDarkTheme()
    storage.main.set('isDarkTheme', state.main.isDarkTheme)
    storage.app.set('isDarkTheme', state.main.isDarkTheme)
  })
  bus.on('routing', args => {
    state.main.setRoute(args?.route)
  })
  events({ storage, i18next, state, bus })
}

export { init as initEvents }
export type { IInitEvent }
