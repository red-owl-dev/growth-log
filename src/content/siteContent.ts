export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  url?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  technologies?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  calendar?: string;
  github?: string;
  resume?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  architecture?: string[];
  devops?: string[];
  quality?: string[];
  mobile?: string[];
  ai?: string[];
  methodologies?: string[];
}

export interface SiteContent {
  // Basic Information
  profession: string;
  fullName: string;
  headline: string;
  tagline: string;
  
  // About Section
  about: {
    title: string;
    description: string;
    experience: string;
    credentials: string[];
  };
  
  // Tech Stack Section (Optional)
  techStack?: TechStack;
  
  // Experience Section (Optional)
  experience?: Experience[];
  
  // Services Section (Optional)
  services?: Service[];
  
  // Articles Section (Optional)
  articles?: Article[];
  
  // Testimonials Section (Optional)
  testimonials?: Testimonial[];
  
  // Contact Information
  contact: ContactInfo;
  
  // Social Links
  socialLinks?: SocialLink[];
  
  // Call to Action
  cta?: {
    primary?: string;
    secondary?: string;
  };
  
  // SEO Metadata
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// Helper function to check if section should be rendered
export function shouldRenderSection<T>(items?: T[]): items is T[] {
  return Array.isArray(items) && items.length > 0;
}

// Helper function to check if object has content
export function hasContent(obj?: unknown): obj is Record<string, unknown> {
  return obj !== undefined && obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0;
}
