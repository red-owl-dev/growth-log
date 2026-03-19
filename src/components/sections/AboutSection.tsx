"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import type { SiteContent } from "@/content/siteContent";

interface AboutSectionProps {
  content: SiteContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              {content.about.description}
            </p>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              {content.about.experience}
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {t('about.credentials')}
              </h3>
              <ul className="space-y-3">
                {content.about.credentials.map((credential: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-text">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">
                    {content.fullName.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {content.fullName}
                </h3>
                <p className="text-text-secondary font-medium">
                  {content.profession}
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
