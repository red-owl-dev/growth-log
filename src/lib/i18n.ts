import { defaultLanguage, isLanguageSupported } from "@/locales/languages";

// Client-side language detection
export function getBrowserLanguage(): string {
  if (typeof window === 'undefined') return defaultLanguage.code;
  
  const browserLang = navigator.language.split('-')[0];
  return isLanguageSupported(browserLang) ? browserLang : defaultLanguage.code;
}

// Server-side language detection
export function getLanguageFromHeaders(headers: Headers): string {
  const acceptLanguage = headers.get('accept-language');
  if (!acceptLanguage) return defaultLanguage.code;
  
  const preferredLang = acceptLanguage.split(',')[0].split('-')[0];
  return isLanguageSupported(preferredLang) ? preferredLang : defaultLanguage.code;
}

// Get language from URL path
export function getLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const potentialLang = segments[0];
  
  if (potentialLang && isLanguageSupported(potentialLang)) {
    return potentialLang;
  }
  
  return defaultLanguage.code;
}

// Build localized path
export function buildLocalizedPath(language: string, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return language === defaultLanguage.code 
    ? `/${cleanPath}` 
    : `/${language}/${cleanPath}`;
}

// Remove language from path
export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && isLanguageSupported(firstSegment)) {
    return '/' + segments.slice(1).join('/');
  }
  
  return pathname;
}
