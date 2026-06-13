'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t, language } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary px-8 py-3 text-base"
              >
                {t.hero.cta}
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {t.hero.ctaSecondary}
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
