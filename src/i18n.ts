import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import sv from './locales/sv.json'

import stilliaEn from './locales/en/stillia.json'
import stilliaSv from './locales/sv/stillia.json'

import vehicleEn from './locales/en/vehicle.json'
import vehicleSv from './locales/sv/vehicle.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...en,
        stillia: stilliaEn,
        vehicle: vehicleEn,
      },
    },
    sv: {
      translation: {
        ...sv,
        stillia: stilliaSv,
        vehicle: vehicleSv,
      },
    },
  },

  lng:
    localStorage.getItem('portfolio-language') === 'sv'
      ? 'sv'
      : 'en',

  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
