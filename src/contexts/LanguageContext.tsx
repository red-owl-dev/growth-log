"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { defaultLanguage, supportedLanguages, Language } from '@/locales/languages';
import { getBrowserLanguage } from '@/lib/i18n';
import { loadTranslations, loadContent } from '@/lib/translations';
import type { SiteContent } from '@/content/siteContent';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, unknown>;
  content: SiteContent | null;
  isLoading: boolean;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, unknown>>({});
  const [content, setContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load language data
  const loadLanguageData = async (lang: Language) => {
    setIsLoading(true);
    try {
      const [translationsData, contentData] = await Promise.all([
        loadTranslations(lang.code, 'common'),
        loadContent(lang.code)
      ]);
      
      setTranslations(translationsData);
      setContent(contentData);
    } catch (error) {
      console.error('Failed to load language data:', error);
      // Fallback to default language
      if (lang.code !== defaultLanguage.code) {
        await loadLanguageData(defaultLanguage);
        setLanguageState(defaultLanguage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Set language and load data
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang.code);
    loadLanguageData(lang);
  };

  // Translation helper
  const t = (key: string, params?: Record<string, string | number>) => {
    const value = getNestedValue(translations, key);
    
    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found or is not a string`);
      return key;
    }
    
    if (params) {
      return interpolate(value, params);
    }
    
    return value;
  };

  // Initialize language on mount
  useEffect(() => {
    const initLanguage = async () => {
      let selectedLanguage = defaultLanguage;
      
      // Priority: initialLanguage > localStorage > browser language > default
      if (initialLanguage) {
        const lang = supportedLanguages.find(l => l.code === initialLanguage);
        if (lang) selectedLanguage = lang;
      } else {
        const savedLanguage = localStorage.getItem('preferred-language');
        if (savedLanguage) {
          const lang = supportedLanguages.find(l => l.code === savedLanguage);
          if (lang) selectedLanguage = lang;
        } else {
          const browserLang = getBrowserLanguage();
          const lang = supportedLanguages.find(l => l.code === browserLang);
          if (lang) selectedLanguage = lang;
        }
      }
      
      setLanguageState(selectedLanguage);
      await loadLanguageData(selectedLanguage);
    };

    initLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLanguage]);

  // Helper functions
  function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
    return path.split('.').reduce((current: unknown, key: string) => {
      if (current && typeof current === 'object' && current !== null) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, obj);
  }

  function interpolate(template: string, params: Record<string, string | number>): string {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params[key]?.toString() || match;
    });
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    translations,
    content,
    isLoading,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
