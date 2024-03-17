import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './tr.json';
import en from './en.json';

export const languageResource = {
  en: { translation: en },
  tr: { translation: tr },
};

i18next.use(initReactI18next).init({
  debug: true,
  lng: 'en',
  compatibilityJSON: 'v3',
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: languageResource,
})

export default i18next;