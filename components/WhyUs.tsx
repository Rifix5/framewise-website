'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Zap, Bot, MessageCircle, Shield } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const icons = [Zap, Bot, MessageCircle, Shield]

export default function WhyUs() {
  const { t, language } = useLanguage()

  return (
    <section id="why-us" className="py-24 px-6">
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
              key={t.whyUs.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {t.whyUs.title}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {icons.map((Icon, i) => {
            const item = t.whyUs.items[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="shrink-0 p-3 rounded-xl bg-white/5">
                  <Icon size={20} className="text-indigo-400" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${language}-why-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold text-white mb-1 leading-snug">{item.title}</h3>
                    {item.description && (
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    )}
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
