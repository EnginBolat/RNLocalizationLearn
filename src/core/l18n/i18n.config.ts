import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, tr } from './translation';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

export const languageResource = {
  en: { translation: en },
  tr: { translation: tr },
};

i18next
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    ns: [],
    defaultNS: undefined,
    compatibilityJSON: 'v3',
    supportedLngs: ['en', 'tr'],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: languageResource,
  });


export default i18next;