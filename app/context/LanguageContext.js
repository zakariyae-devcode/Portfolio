'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');

  useEffect(() => {
    const saved = localStorage.getItem('app_lang');
    if (saved) {
      setLang(saved);
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = saved;
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prevLang) => {
      const nextLang = prevLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('app_lang', nextLang);
      document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = nextLang;
      return nextLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);