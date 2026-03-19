"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const { t, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-primary hover:text-accent transition-colors duration-200"
            >
              {content?.fullName || 'Loading...'}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              {t('navigation.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              {t('navigation.services')}
            </button>
            <button 
              onClick={() => scrollToSection('articles')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              {t('navigation.articles')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              {t('navigation.contact')}
            </button>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                size="sm"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('hero.scheduleConsultation')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-200"
              onClick={() => scrollToSection('contact')}
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h12M8 12h12M8 18h12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
