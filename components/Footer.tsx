'use client'

import { useLanguage } from '@/context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/framewise-logo.svg" alt="Framewise" style={{ height: '36px', width: 'auto' }} />
        <span className="text-zinc-500 text-sm">{t.footer.copyright}</span>
        <LanguageToggle />
      </div>
    </footer>
  )
}
