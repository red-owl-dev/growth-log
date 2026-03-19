"use client";

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supportedLanguages, type Language } from '@/locales/languages';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (selectedLanguage: typeof language) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-surface-hover transition-all duration-300 border border-border/50"
        aria-label="Select language"
      >
        <span className="text-lg">{language.flag}</span>
        <span className="text-sm font-medium text-primary hidden sm:block">
          {language.nativeName}
        </span>
        <svg 
          className={`w-4 h-4 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-xl z-50 backdrop-blur-sm">
          <div className="py-1">
            {supportedLanguages.map((lang: Language) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-surface-hover transition-all duration-300 border border-border/50 ${
                  language.code === lang.code ? 'bg-accent/10 text-accent' : 'text-primary'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{lang.nativeName}</div>
                  <div className="text-xs text-text-secondary">{lang.name}</div>
                </div>
                {language.code === lang.code && (
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
