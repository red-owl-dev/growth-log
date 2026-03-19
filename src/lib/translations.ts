import { defaultLanguage } from "@/locales/languages";
import type { SiteContent } from "@/content/siteContent";

// Type-safe translation function
export type TranslationKey = string;
export type TranslationParams = Record<string, string | number>;

// Translation cache
const translationCache = new Map<string, unknown>();

// Load translations for a specific language
export async function loadTranslations(language: string, namespace: string = 'common'): Promise<Record<string, unknown>> {
  const cacheKey = `${language}-${namespace}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey) as Record<string, unknown>;
  }

  try {
    // Dynamic import to avoid bundling all translations
    const translations = await import(`@/locales/${language}/${namespace}.json`);
    translationCache.set(cacheKey, translations.default);
    return translations.default;
  } catch {
    console.warn(`Failed to load translations for ${language}/${namespace}, falling back to ${defaultLanguage.code}`);
    
    // Fallback to default language
    if (language !== defaultLanguage.code) {
      return loadTranslations(defaultLanguage.code, namespace);
    }
    
    // Return empty object if even default language fails
    return {};
  }
}

// Load content for a specific language
export async function loadContent(language: string): Promise<SiteContent> {
  const cacheKey = `${language}-content`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey) as SiteContent;
  }

  try {
    const content = await import(`@/locales/${language}/content.ts`);
    const contentData = content.softwareDeveloperContent || content.default?.softwareDeveloperContent;
    translationCache.set(cacheKey, contentData as SiteContent);
    return contentData as SiteContent;
  } catch {
    console.warn(`Failed to load content for ${language}, falling back to ${defaultLanguage.code}`);
    
    // Fallback to default language
    if (language !== defaultLanguage.code) {
      return loadContent(defaultLanguage.code);
    }
    
    throw new Error(`Failed to load content for ${language}`);
  }
}

// Simple translation function (for client-side)
export function t(translations: Record<string, unknown>, key: TranslationKey, params?: TranslationParams): string {
  const value = getNestedValue(translations, key);
  
  if (typeof value !== 'string') {
    console.warn(`Translation key "${key}" not found or is not a string`);
    return key;
  }
  
  if (params) {
    return interpolate(value, params);
  }
  
  return value;
}

// Helper to get nested values from object using dot notation
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && current !== null) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

// Helper to interpolate parameters into translation strings
function interpolate(template: string, params: TranslationParams): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return params[key]?.toString() || match;
  });
}
