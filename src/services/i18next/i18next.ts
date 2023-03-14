import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/en.json'

export default function () {
  void i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
    },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
}
