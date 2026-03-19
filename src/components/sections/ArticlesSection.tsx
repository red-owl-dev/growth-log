"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";

import type { SiteContent, Article } from "@/content/siteContent";

interface ArticlesSectionProps {
  content: SiteContent;
}

export function ArticlesSection({ content }: ArticlesSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('articles.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            {t('articles.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.articles?.map((article: Article) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-background cursor-pointer hover-lift border-border/50 bg-surface hover:bg-surface-hover transition-all duration-300"
              onClick={() => {
                if (article.url) {
                  window.open(article.url, '_blank');
                }
              }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {article.date}
                  </span>
                  <svg 
                    className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">
            {t('articles.stayInformed')}
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            {t('articles.viewAll')}
          </button>
        </div>
      </div>
    </section>
  );
}
