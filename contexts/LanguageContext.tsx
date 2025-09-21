import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, languages } from '../lib/translations';
import get from 'lodash.get';

type LanguageCode = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'pa' | 'gu' | 'kn';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (language: string) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('en');

  const setLanguage = (langCode: string) => {
    if (['en', 'hi', 'bn', 'ta', 'te', 'mr', 'pa', 'gu', 'kn'].includes(langCode)) {
      setLanguageState(langCode as LanguageCode);
    }
  };

  const t = (key: string, replacements?: { [key: string]: string | number }): string => {
    let translation = get(translations[language], key);
    
    if (!translation) {
      // Fallback to English if translation is missing
      translation = get(translations.en, key, key);
    }
    
    if (replacements) {
      Object.keys(replacements).forEach(placeholder => {
        translation = translation.replace(`{${placeholder}}`, String(replacements[placeholder]));
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};