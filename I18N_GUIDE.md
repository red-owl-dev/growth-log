# Internationalization (i18n) Guide

This guide explains how to add new languages and manage translations in the Professional Website Template.

## 🏗️ Architecture Overview

The i18n system is built with:
- **Dictionary-based translations** in JSON files
- **React Context** for language state management
- **Dynamic loading** of translations and content
- **Language detection** from browser, localStorage, and URL
- **Type-safe translation helpers**

## 📁 File Structure

```
src/
├── locales/
│   ├── languages.ts           # Language registry and configuration
│   ├── en/                    # English translations
│   │   ├── common.json       # UI strings
│   │   └── content.ts        # Content data
│   ├── pt/                    # Portuguese translations
│   │   ├── common.json       # UI strings
│   │   └── content.ts        # Content data
│   └── es/                    # Spanish translations
│       ├── common.json       # UI strings
│       └── content.ts        # Content data
├── contexts/
│   └── LanguageContext.tsx   # Language state management
├── lib/
│   ├── i18n.ts              # Language utilities
│   └── translations.ts       # Translation loading helpers
└── components/
    └── ui/
        └── LanguageSwitcher.tsx  # Language selector component
```

## 🚀 Adding a New Language

### Step 1: Register the Language

Edit `src/locales/languages.ts` and add your language to the `supportedLanguages` array:

```typescript
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
  },
  // ADD YOUR LANGUAGE HERE
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  }
];
```

### Step 2: Create Translation Files

Create a new directory for your language:

```bash
mkdir src/locales/fr
```

Create the UI translations file `src/locales/fr/common.json`:

```json
{
  "navigation": {
    "home": "Accueil",
    "about": "À propos",
    "services": "Services",
    "articles": "Articles",
    "contact": "Contact"
  },
  "hero": {
    "scheduleConsultation": "Planifier une Consultation",
    "downloadGuide": "Télécharger le Guide d'Investissement"
  },
  "about": {
    "title": "À propos",
    "credentials": "Compétences & Certifications"
  },
  "services": {
    "title": "Services",
    "subtitle": "Solutions financières complètes adaptées à vos besoins et objectifs uniques",
    "scheduleConsultation": "Planifier une Consultation",
    "customSolution": "Besoin d'une solution personnalisée? Discutons de vos exigences spécifiques."
  },
  "articles": {
    "title": "Insights & Articles",
    "subtitle": "Analyses d'experts et perspectives sur la planification financière, les stratégies d'investissement et les tendances du marché",
    "viewAll": "Voir Tous les Articles",
    "stayInformed": "Restez informé avec des insights réguliers et des analyses de marché"
  },
  "contact": {
    "title": "Contactez-nous",
    "subtitle": "Prêt à prendre le contrôle de votre avenir financier? Discutons de la façon dont nous pouvons travailler ensemble pour atteindre vos objectifs.",
    "contactInfo": "Informations de Contact",
    "scheduleConsultation": "Planifier une Consultation",
    "sendMessage": "Envoyer un Message",
    "consultationSubtitle": "Faites le premier pas vers la sécurité financière. Planifiez une consultation complémentaire pour discuter de vos objectifs financiers et comment je peux vous aider à les atteindre.",
    "noObligation": "Sans engagement • Discussion confidentielle • Conseils personnalisés",
    "email": "E-mail",
    "phone": "Téléphone",
    "office": "Bureau",
    "linkedin": "LinkedIn",
    "connectWithMe": "Connectez-vous avec moi"
  },
  "footer": {
    "rights": "Tous droits réservés",
    "privacy": "Politique de Confidentialité",
    "terms": "Conditions d'Utilisation"
  }
}
```

### Step 3: Create Content File

Create `src/locales/fr/content.ts` with translated content:

```typescript
export const financeProfessionalContent = {
  profession: "Conseiller Financier",
  fullName: "Name SurName",
  headline: "Planification Financière Stratégique & Gestion de Patrimoine",
  tagline: "Aider les individus et familles à haut patrimoine à atteindre la sécurité financière grâce à des stratégies d'investissement personnalisées",
  
  about: {
    title: "À propos d'{{Name}}",
    description: "Avec plus de 15 ans d'expérience en gestion de patrimoine et planification financière, je me spécialise dans la création de stratégies financières complètes adaptées aux objectifs uniques et à la tolérance au risque de chaque client.",
    experience: "15+ ans d'expérience dans la gestion de portefeuilles évalués à plus de 500M$ pour des individus, familles et petites entreprises à haut patrimoine.",
    credentials: [
      "Certified Financial Planner (CFP®)",
      "Chartered Financial Analyst (CFA®)",
      "MBA en Finance, Wharton School",
      "Licencié Série 7 & 65"
    ]
  },
  
  services: [
    {
      id: "wealth-management",
      title: "Gestion de Patrimoine",
      description: "Gestion complète de portefeuille et développement de stratégies d'investissement adaptées à vos objectifs financiers et à votre tolérance au risque."
    },
    // ... add other services
  ],
  
  articles: [
    {
      id: "market-outlook-2024",
      title: "Perspectives de Marché 2024: Naviguer la Volatilité avec Allocation Stratégique",
      excerpt: "Principaux insights sur les tendances du marché et les stratégies d'investissement pour l'année à venir en période d'incertitude économique.",
      category: "Analyse de Marché",
      readTime: "5 min de lecture",
      date: "Mars 2024"
    },
    // ... add other articles
  ],
  
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Example Street, City, Country",
    linkedin: "https://linkedin.com/in/example",
    calendar: "https://calendly.com/example"
  },
  
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/example"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/example"
    }
  ],
  
  cta: {
    primary: "Planifier une Consultation",
    secondary: "Télécharger le Guide d'Investissement"
  },
  
  seo: {
    title: "Name SurName - Conseiller Financier | Gestion de Patrimoine & Planification Financière",
    description: "Conseiller financier expérimenté offrant une gestion de patrimoine complète, une planification de la retraite et des stratégies d'investissement pour les individus et familles à haut patrimoine.",
    keywords: ["conseiller financier", "gestion de patrimoine", "planification financière", "stratégie d'investissement", "planification de la retraite", "planification fiscale"]
  }
};
```

### Step 4: Test Your Language

That's it! Your new language is now available. The language switcher will automatically include it, and users can select it from the dropdown.

## 🔧 Translation System

### Using Translations in Components

```typescript
import { useLanguage } from '@/contexts/LanguageContext';

export function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('navigation.about')}</h1>
      <p>{t('services.subtitle')}</p>
    </div>
  );
}
```

### Translation Keys

Translation keys use **dot notation** to access nested values:

```json
{
  "navigation": {
    "home": "Home",
    "about": "About"
  }
}
```

Access with: `t('navigation.home')`

### Parameter Interpolation

You can pass parameters to translations:

```json
{
  "welcome": "Welcome {{name}}!"
}
```

Usage: `t('welcome', { name: 'John' })`

## 🎨 Language Switcher

The language switcher component automatically:
- Shows all registered languages
- Displays flags and native names
- Remembers user preference in localStorage
- Updates the entire UI instantly

### Customizing the Switcher

Edit `src/components/ui/LanguageSwitcher.tsx` to customize appearance or behavior.

## 🌐 Language Detection

The system detects language in this priority order:

1. **URL Path** (if implemented): `/en/contact`, `/pt/servicos`
2. **localStorage**: User's previous selection
3. **Browser Language**: `navigator.language`
4. **Default Language**: English

## 📝 Content vs Translations

### Translations (`common.json`)
- UI elements (buttons, labels, navigation)
- Reusable strings
- Error messages
- Form labels

### Content (`content.ts`)
- Professional-specific information
- Service descriptions
- Article content
- Contact details
- SEO metadata

## 🔄 Dynamic Loading

Translations are loaded dynamically to improve performance:

```typescript
// Only loads when needed
const translations = await loadTranslations('fr', 'common');
const content = await loadContent('fr');
```

## 🛠️ Advanced Features

### Language-Aware Routing (Future)

The foundation is laid for URL-based language switching:

```typescript
// Future implementation
/en/contact    // English contact page
/pt/contato    // Portuguese contact page
/es/contacto   // Spanish contact page
```

### RTL Language Support

For RTL languages (Arabic, Hebrew), you can extend the system:

```typescript
// In languages.ts
{
  code: 'ar',
  name: 'Arabic',
  nativeName: 'العربية',
  flag: '🇸🇦',
  direction: 'rtl'  // Add direction property
}
```

### Pluralization

For complex pluralization rules, you can extend the translation function:

```typescript
// Future enhancement
t('messages.count', { count: 5 }) // "5 messages" or "5 message"
```

## 🧪 Testing

### Manual Testing
1. Open the website
2. Use the language switcher in the navbar
3. Verify all text changes correctly
4. Check that content is properly translated
5. Test language persistence across page reloads

### Automated Testing
You can add tests for translations:

```typescript
import { renderHook } from '@testing-library/react';
import { useLanguage } from '@/contexts/LanguageContext';

test('translation function works', () => {
  const { result } = renderHook(() => useLanguage(), {
    wrapper: LanguageProvider
  });
  
  expect(result.current.t('navigation.home')).toBe('Home');
});
```

## 🚀 Deployment Considerations

### Build Optimization
The system uses dynamic imports, so only needed translations are bundled:

```bash
# Build analysis
npm run build
npm run analyze
```

### CDN Caching
Consider caching translation files at CDN edge locations for better performance.

## 🤝 Contributing

When adding translations:

1. **Maintain Consistency**: Use the same key structure across languages
2. **Review Quality**: Ensure translations are natural and professional
3. **Test Thoroughly**: Verify all UI elements are translated
4. **Document Changes**: Update this guide if you modify the system

## 📞 Support

If you encounter issues:

1. Check browser console for errors
2. Verify file structure matches this guide
3. Ensure JSON files are valid
4. Test with different browsers

---

**Happy translating! 🌍**
