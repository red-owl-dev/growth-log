export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  }
];

export const defaultLanguage = supportedLanguages[0]; // English

export function getLanguage(code: string): Language | undefined {
  return supportedLanguages.find(lang => lang.code === code);
}

export function isLanguageSupported(code: string): boolean {
  return supportedLanguages.some(lang => lang.code === code);
}
