export interface ThemeColors {
  primary: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export interface Typography {
  fontFamily: string;
  headingFont: string;
  bodyFont: string;
  scale: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  };
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
}

export interface Theme {
  colors: ThemeColors;
  typography: Typography;
  spacing: Spacing;
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export const financeTheme: Theme = {
  colors: {
    primary: "#1e3a5f", // Deep navy blue
    primaryDark: "#152a42", // Darker navy
    secondary: "#6b7280", // Neutral gray
    accent: "#10b981", // Emerald green (trustworthy alternative to gold)
    background: "#ffffff", // Pure white
    surface: "#f9fafb", // Very light gray
    text: "#111827", // Dark gray for text
    textSecondary: "#6b7280", // Medium gray for secondary text
    border: "#e5e7eb", // Light gray for borders
    success: "#10b981", // Green for success states
    warning: "#f59e0b", // Amber for warnings
    error: "#ef4444" // Red for errors
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
    headingFont: "Inter, system-ui, -apple-system, sans-serif",
    bodyFont: "Inter, system-ui, -apple-system, sans-serif",
    scale: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem",    // 48px
      "6xl": "3.75rem"  // 60px
    }
  },
  spacing: {
    xs: "0.5rem",   // 8px
    sm: "1rem",     // 16px
    md: "1.5rem",   // 24px
    lg: "2rem",     // 32px
    xl: "3rem",     // 48px
    "2xl": "4rem",  // 64px
    "3xl": "6rem",  // 96px
    "4xl": "8rem"   // 128px
  },
  borderRadius: {
    sm: "0.25rem",  // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem",   // 8px
    full: "9999px"  // Full rounded
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
  }
};

// Example themes for other professions (can be easily switched)
export const medicalTheme: Theme = {
  ...financeTheme,
  colors: {
    ...financeTheme.colors,
    primary: "#1e40af", // Medical blue
    accent: "#0ea5e9"   // Sky blue
  }
};

export const legalTheme: Theme = {
  ...financeTheme,
  colors: {
    ...financeTheme.colors,
    primary: "#374151", // Dark gray
    accent: "#6366f1"   // Indigo
  }
};

export const marketingTheme: Theme = {
  ...financeTheme,
  colors: {
    primary: "#8b5cf6", // Purple for marketing
    primaryDark: "#7c3aed", // Darker purple
    accent: "#ec4899", // Pink accent
    secondary: "#6366f1", // Indigo secondary
    background: "#fafafa", // Light gray background
    surface: "#ffffff", // White surface
    text: "#1f2937", // Dark text
    textSecondary: "#6b7280", // Lighter text
    border: "#e5e7eb", // Light border
    success: "#10b981", // Green
    warning: "#f59e0b", // Orange
    error: "#ef4444" // Red
  }
};

export const techTheme: Theme = {
  ...financeTheme,
  colors: {
    ...financeTheme.colors,
    primary: "#1e293b", // Deep indigo/blue
    accent: "#3b82f6"   // Electric blue
  }
};

export const developerTheme: Theme = {
  ...financeTheme,
  colors: {
    ...financeTheme.colors,
    primary: "#1e293b", // Deep indigo/blue
    primaryDark: "#1a202c", // Darker blue
    accent: "#3b82f6", // Electric blue
    secondary: "#64748b", // Slate blue
    background: "#0f172a", // Very dark background
    surface: "#1e293b", // Dark surface
    text: "#f8fafc", // Light text
    textSecondary: "#cbd5e1", // Muted text
    border: "#334155", // Dark border
    success: "#10b981", // Green
    warning: "#f59e0b", // Orange
    error: "#ef4444" // Red
  }
};
