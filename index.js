import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';

/**
 * Creates a context for internationalization (i18n) to be consumed by the useTranslation hook.
 */
const I18nContext = createContext();

/**
 * Custom hook for accessing translation functions.
 * @returns {Object} Object containing translation function and language change function.
 */
export const useTranslation = () => useContext(I18nContext);

/**
 * Provider component for managing the i18n state and providing translation context to the app.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child components to be wrapped by the provider.
 * @param {Object} props.resources - Object containing translation resources.
 * @param {string} [props.defaultLanguage='en'] - Default language for the app.
 */
const I18nProvider = ({ children, resources, defaultLanguage = 'en' }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    i18n.init({
      resources,
      lng: language,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
  }, [language, resources]);

  /**
   * Function to change the current language.
   * @param {string} lang - Language code to switch to.
   */
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ t: i18n.t, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;
