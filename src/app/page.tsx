"use client";

import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { shouldRenderSection, hasContent } from "@/content/siteContent";

export default function Home() {
  const { content, isLoading } = useLanguage();

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection content={content} />
      
      {/* Conditional About Section */}
      {hasContent(content.about) && <AboutSection content={content} />}
      
      {/* Conditional Tech Stack Section */}
      {hasContent(content.techStack) && <TechStackSection techStack={content.techStack} />}
      
      {/* Conditional Experience Section */}
      {shouldRenderSection(content.experience) && <ExperienceSection content={content} />}
      
      {/* Conditional Services Section */}
      {shouldRenderSection(content.services) && <ServicesSection content={content} />}
      
      {/* Conditional Projects Section */}
      {shouldRenderSection(content.articles) && <ArticlesSection content={content} />}
      
      {/* Conditional Testimonials Section */}
      {/* {shouldRenderSection(content.testimonials) && <TestimonialsSection content={content} />} */}
      
      {/* Contact Section - Always render as it's essential */}
      <ContactSection content={content} />
    </div>
  );
}
