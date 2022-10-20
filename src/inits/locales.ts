import { initReactI18next } from 'react-i18next'
import i18next, { i18n } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

interface IInit {
  debug: boolean
  fallbackLng: string
  supportedLngs: Array<string>
  resources: {
    [name: string]: { translation: any }
  }
}

function init(config: IInit): i18n {
  const instance = i18next.createInstance()

  instance
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      supportedLngs: config.supportedLngs,
      fallbackLng: config.fallbackLng,
      resources: config.resources,
      debug: config.debug,
      interpolation: {
        escapeValue: false,
      },
      nonExplicitSupportedLngs: true,
    })

  return instance
}

export { init as initLocale }
export type { IInit as IInitLocale }
