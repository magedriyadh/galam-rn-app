import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar";
import en from "./en";
import { languageDetectorPlugin } from './languageDetectorPlugin';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetectorPlugin)
  .init({
    resources: {
      en: {
        translation: en
      },
      ar: {
        translation: ar
      }
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;
