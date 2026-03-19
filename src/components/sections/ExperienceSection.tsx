"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { ExperienceCard } from "@/components/sections/ExperienceCard";

import type { SiteContent, Experience } from "@/content/siteContent";

interface ExperienceSectionProps {
  content: SiteContent;
}

export function ExperienceSection({ content }: ExperienceSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            {t('experience.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {content.experience?.map((exp: Experience) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
