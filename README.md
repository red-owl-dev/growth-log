# Personal Portfolio Template

A modern, responsive personal portfolio template built with Next.js, TypeScript, and Tailwind CSS. Ideal for developers, designers, consultants, and professionals who want a polished online presence with full multilingual support.

## 🚀 Highlights

- **🌍 Multilingual Portfolio**: English, Portuguese, and Spanish support
- **🎨 Clean Professional Layout**: Elegant sections for profile, experience, services, and contact
- **⚙️ Content-Driven**: Update your portfolio text and data without changing components
- **👨‍💻 Personal Branding**: Showcase your skills, projects, articles, and contact details
- **📱 Responsive Design**: Mobile-friendly and desktop-ready
- **🔒 TypeScript**: Type-safe development and better DX
- **🧩 Reusable Components**: Modular sections and UI building blocks
- **🔍 SEO-Friendly**: Semantic HTML and metadata-ready structure

## 🏗️ Project Structure

### Internationalization System
This portfolio supports a reusable i18n system:

- `src/locales/` - Translation files and language registry
- `src/contexts/LanguageContext.tsx` - Language state management
- `src/lib/i18n.ts` - Language utilities and detection
- `src/lib/translations.ts` - Translation loading helpers
- `src/components/ui/LanguageSwitcher.tsx` - Language selector component

### Content Organization
Portfolio content is centralized and localizable:

```
src/
├── locales/
│   ├── languages.ts           # Language registry
│   ├── en/                    # English translations
│   │   ├── common.json        # UI strings
│   │   └── content.ts         # Content data
│   ├── pt/                    # Portuguese translations
│   │   ├── common.json        # UI strings
│   │   └── content.ts         # Content data
│   └── es/                    # Spanish translations
│       ├── common.json        # UI strings
│       └── content.ts         # Content data
├── components/
│   ├── ui/                    # Reusable UI components
│   └── sections/              # Portfolio sections
├── contexts/                  # React contexts
├── lib/                       # Utility functions
└── app/                       # Next.js App Router pages
```

## 🌍 Supported Languages

- **English** (en)
- **Português** (pt)
- **Español** (es)

## 📝 Portfolio Sections

- **Hero**: Personal introduction and call-to-action
- **About**: Summary, values, and background
- **Services**: Core offers or areas of expertise
- **Experience**: Work history, projects, and achievements
- **Articles**: Blog posts, case studies, or portfolio highlights
- **Contact**: Contact details and social links
- **Language Switcher**: Quick language selection in the navbar

## ✨ Personalization Guide

### 1. Update Your Profile
Edit the content files for each language in `src/locales/[lang]/content.ts`:

```typescript
export const portfolioContent = {
  profession: "Your Profession",
  fullName: "Your Name",
  headline: "Your headline statement",
  tagline: "Short professional summary",
  // ... update your sections and content here
};
```

### 2. Customize Services and Experience
Update the `services`, `experience`, and `articles` arrays in your content files to reflect your actual work and offerings.

### 3. Add New Languages
1. Register the language in `src/locales/languages.ts`
2. Create `src/locales/[lang]/common.json`
3. Create `src/locales/[lang]/content.ts`

The language selector will automatically include new languages.

> For more details, check [I18N_GUIDE.md](./I18N_GUIDE.md).

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```bash
   http://localhost:3000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: below 768px
- **Tablet**: 768px to 1024px
- **Desktop**: above 1024px

## 🛠️ Technologies Used

- Next.js 16
- TypeScript
- Tailwind CSS
- React Context
- Dynamic translation loading

## 💡 How to Use This Portfolio

- Replace dummy content in `src/locales/[lang]/content.ts`
- Add your own experience, services, and project highlights
- Keep the design simple and focused on your story
- Use the language switcher for an international portfolio

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the generated output to Netlify
```

### Other Platforms
The production build output is stored in `.next` after running:

```bash
npm run build
```

## 🌐 Extending the Portfolio

This template is designed to be customizable for different personal brands and professions. You can:

- add new sections in `src/components/sections`
- update the theme in `tailwind.config.ts`
- change copy and content across languages
- reuse existing components for new page sections

## 📚 Recommended Customizations

- personalize the hero text and call-to-action
- showcase your key skills and specialties
- keep the about section concise and authentic
- use the experience cards to highlight real projects
- make sure contact details are easy to find

## 🌐 Internationalization Features

- **🔄 Dynamic Language Switching**: Instant UI updates without page reload
- **💾 Persistent Preferences**: Remembers user's language choice
- **🌐 Auto-Detection**: Detects browser language automatically
- **📱 Mobile-Optimized Switcher**: Works perfectly on all devices
- **🎨 Professional Design**: Clean, modern language selector
- **⚡ Performance**: Dynamic loading for optimal bundle size
- **🔧 Type Safety**: Full TypeScript support for translations

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT License - feel free to use this template for your projects.

---

**Built with ❤️ for professionals across all industries and languages 🌍**
