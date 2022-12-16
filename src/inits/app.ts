import { i18n } from 'i18next'
import { autorun, set, toJS } from 'mobx'
import { setLocale } from 'yup'

import { IStep } from '../models'
import { IBus } from '../tools'
import { IInitStateR } from './state'
import { initWorkSteps } from './steps'
import { IInitStorageR } from './storage'

interface Iconfig {
  appName: string
  theme: string
  steps?: IStep[]
  demoAccountStepId?: string
  startStepId?: string
  [key: string]: any
}

interface IInitApp {
  storage: IInitStorageR
  i18next: i18n
  state: IInitStateR
  bus: IBus
  api: any // NOTE: TS
  isRootApp: boolean
  config: Iconfig
}

type TinitApp = (args: IInitApp) => Promise<void>

async function init(args: IInitApp, initCurrentApp: TinitApp) {
  const { storage, i18next, state, bus, api, isRootApp, config } = args

  if (isRootApp) {
    window.addEventListener('hashchange', () => {
      bus.say('routing', { route: window.location.hash })
    })

    if (!storage.session.main.get('URLParams')) {
      const URLSearchParameters: Record<string, string> = {}

      new URLSearchParams(window.location.search).forEach(
        (value, key) => (URLSearchParameters[key] = value),
      )

      storage.session.main.set('URLParams', URLSearchParameters)
    }
  }

  initWorkSteps({ isRootApp, config, bus, storage })

  setLocale({
    mixed: {
      default: () => i18next.t('form.validate.invalide'),
      required: () => i18next.t('form.validate.required'),
    },
    string: {
      email: () => i18next.t('form.validate.email'),
      min: ({ min }) => i18next.t('form.validate.string.min', { min }),
      max: ({ max }) => i18next.t('form.validate.string.max', { max }),
    },
    number: {
      min: ({ min }) => i18next.t('form.validate.number.min', { min }),
      max: ({ max }) => i18next.t('form.validate.number.max', { max }),
    },
  })

  bus.on('changeLanguage', args => i18next.changeLanguage(args?.lng))

  bus.on('toggleDarkTheme', () => {
    state.main.toggleDarkTheme()
  })
  if (isRootApp) {
    bus.on('toggleDarkTheme', () => {
      storage.local.main.set('isDarkTheme', state.main.isDarkTheme)
    })
  }

  bus.on('routing', args => {
    state.main.setRoute(args?.route)
  })

  const sessionState = storage.session.app.get('state')
  // @ts-ignore
  if (sessionState) set(state.app, sessionState)
  autorun(() => storage.session.app.set('state', toJS(state.app)))

  await initCurrentApp(args)
}

export { init as initApp }
export type { Iconfig, IInitApp, TinitApp }
