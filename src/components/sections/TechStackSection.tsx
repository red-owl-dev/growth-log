"use client";

import { useEffect, useState } from "react";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { getTechIcon } from "@/components/ui/TechIcons";
import { useLanguage } from "@/contexts/LanguageContext";
import type { TechStack } from "@/content/siteContent";

interface TechStackSectionProps {
  techStack?: TechStack;
}

interface TechCategory {
  title: string;
  technologies: string[];
  translationKey: string;
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!techStack) {
    return null;
  }

  const categories: TechCategory[] = [
    {
      title: "Frontend",
      technologies: techStack.frontend || [],
      translationKey: "frontend"
    },
    {
      title: "Backend", 
      technologies: techStack.backend || [],
      translationKey: "backend"
    },
    {
      title: "Database",
      technologies: techStack.database || [],
      translationKey: "database"
    },
    {
      title: "Architecture & Design",
      technologies: techStack.architecture || [],
      translationKey: "architecture"
    },
    {
      title: "DevOps & Infrastructure",
      technologies: techStack.devops || [],
      translationKey: "devops"
    },
    {
      title: "Quality & Testing",
      technologies: techStack.quality || [],
      translationKey: "quality"
    },
    {
      title: "Mobile",
      technologies: techStack.mobile || [],
      translationKey: "mobile"
    },
    {
      title: "AI & Innovation",
      technologies: techStack.ai || [],
      translationKey: "ai"
    },
    {
      title: "Methodologies",
      technologies: techStack.methodologies || [],
      translationKey: "methodologies"
    }
  ].filter(category => category.technologies.length > 0);

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('techStack.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            {t('techStack.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.translationKey} 
              className={`
                group relative
                bg-slate-900/50 
                backdrop-blur-sm 
                border border-white/10 
                rounded-2xl 
                p-8 
                transition-all 
                duration-500 
                hover:border-blue-500/30 
                hover:bg-slate-900/70
                hover:shadow-xl
                hover:shadow-blue-500/10
                hover-lift
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                  {t(`techStack.${category.translationKey}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <SkillBadge 
                      key={techIndex} 
                      skill={tech}
                      variant="ghost"
                      icon={getTechIcon(tech)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
