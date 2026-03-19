"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import type { SiteContent, Testimonial } from "@/content/siteContent";

interface TestimonialsSectionProps {
  content: SiteContent;
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            {t('testimonials.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.testimonials?.map((testimonial: Testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover-lift border-border/50 bg-surface hover:bg-surface-hover transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Rating Stars */}
                {testimonial.rating && (
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < (testimonial.rating || 0) ? 'text-accent' : 'text-border'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
                
                {/* Testimonial Content */}
                <blockquote className="text-text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center">
                  {testimonial.avatar && (
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
