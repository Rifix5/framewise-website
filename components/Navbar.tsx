'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.services, href: 'services' },
    { label: t.nav.howItWorks, href: 'how-it-works' },
    { label: t.nav.pricing, href: 'pricing' },
    { label: t.nav.contact, href: 'contact' },
  ]

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.85)] backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center"
        >
          <img src="/framewise-logo.svg" alt="Framewise" style={{ height: '48px', width: 'auto' }} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(8,8,8,0.96)] backdrop-blur-md border-b border-white/[0.06] px-6 py-2">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-3 text-zinc-300 hover:text-white border-b border-white/[0.06] last:border-none transition-colors text-sm"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
