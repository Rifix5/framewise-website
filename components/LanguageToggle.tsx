'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1">
      {(['en', 'et'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide transition-all duration-200 ${
            language === lang
              ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-sm'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
