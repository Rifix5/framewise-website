'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import enTranslations from '@/locales/en.json'
import etTranslations from '@/locales/et.json'

export type Language = 'en' | 'et'
export type Translations = typeof enTranslations

const locales: Record<Language, Translations> = {
  en: enTranslations,
  et: etTranslations as Translations,
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: locales[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
