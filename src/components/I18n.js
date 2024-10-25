// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation JSON files
// import enTranslations from '../locales/en/translation.json';
import teTranslations from '../locales/te/translation.json';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      // en: { translation: enTranslations },
      te: { translation: teTranslations },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
