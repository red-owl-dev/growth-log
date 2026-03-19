"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

import type { SiteContent } from "@/content/siteContent";

interface ContactSectionProps {
  content: SiteContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${content.contact.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">
              {t('contact.contactInfo')}
            </h3>
            
            <div className="space-y-4">
              {content.contact.email && (
                <div className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-primary">{t('contact.email')}</p>
                    <a 
                      href={`mailto:${content.contact.email}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {content.contact.email}
                    </a>
                  </div>
                </div>
              )}
              
              {content.contact.phone && (
                <div className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-primary">{t('contact.phone')}</p>
                    <a 
                      href={`tel:${content.contact.phone}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {content.contact.address && (
                <div className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-primary">{t('contact.office')}</p>
                    <p className="text-text-secondary">
                      {content.contact.address}
                    </p>
                  </div>
                </div>
              )}
              
              {/* LinkedIn */}
              {content.contact.linkedin && (
                <div className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-primary">{t('contact.linkedin')}</p>
                    <a 
                      href={content.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {t('contact.connectWithMe')}
                    </a>
                  </div>
                </div>
              )}

              {/* GitHub */}
              {content.contact.github && (
                <div className="flex items-start">
                  <svg 
                    className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.47-2.381 1.236-3.221-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.242 2.872.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.48 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.902-.015 3.293 0 .321.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div>
                    <p className="font-medium text-primary">{t('contact.github')}</p>
                    <a 
                      href={content.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {t('contact.connectWithMe')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Minimalist Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6">
              {t('contact.sendMessage')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('contact.contactSubtitle')}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Sua mensagem..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <div className="flex gap-4">
                <Button 
                  type="submit"
                  size="lg" 
                  className="flex-1 rounded-xl"
                >
                  {t('contact.sendMessage')}
                </Button>
                
                {content.contact.resume && (
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg" 
                    className="rounded-xl"
                    onClick={() => window.open(content.contact.resume, '_blank')}
                  >
                    {t('contact.downloadResume')}
                  </Button>
                )}
              </div>
            </form>
            
            <p className="text-sm text-text-secondary mt-6 text-center">
              {t('contact.noObligation')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
