import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { defaultLanguage } from "@/locales/languages";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Professional Website Template",
  description: "A modern, responsive personal website template for professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLanguage.code}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider initialLanguage={defaultLanguage.code}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
