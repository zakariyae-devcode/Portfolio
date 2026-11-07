'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { siteMeta } from '../siteMeta';

const STORAGE_KEY = 'app_lang';
const DEFAULT_LANG = 'en';
const SUPPORTED = ['en', 'ar'];

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

// Read the saved choice safely (localStorage can be unavailable or blocked).
const readStoredLang = () => {
  if (typeof window === 'undefined') return null;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : null;
  } catch {
    return null;
  }
};

const storeLang = (value) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore storage errors (private mode, disabled storage, etc.)
  }
};

// First visit: Arabic if the browser language starts with "ar", otherwise English.
const detectBrowserLang = () => {
  if (typeof navigator === 'undefined') return DEFAULT_LANG;
  const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
  const primary = (candidates[0] || '').toLowerCase();
  return primary.startsWith('ar') ? 'ar' : 'en';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(DEFAULT_LANG);

  // Resolve the initial language on the client only (keeps SSR output in English).
  useEffect(() => {
    const initial = readStoredLang() || detectBrowserLang();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (initial !== DEFAULT_LANG) setLang(initial);
  }, []);

  // Keep <html lang> and dir in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = siteMeta[lang].title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', siteMeta[lang].description);
  }, [lang]);

  const setLanguage = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    storeLang(next);
    setLang(next);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      storeLang(next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
