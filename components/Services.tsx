'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Brain, Code2, Plug } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const icons = [Globe, Brain, Code2, Plug]

export default function Services() {
  const { t, language } = useLanguage()

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={t.services.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {t.services.title}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {icons.map((Icon, i) => {
            const card = t.services.cards[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-8 group cursor-default hover:border-indigo-500/30 transition-colors duration-300"
              >
                <div className="mb-5 inline-flex p-3 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 transition-colors duration-300">
                  <Icon size={22} className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${language}-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{card.description}</p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
