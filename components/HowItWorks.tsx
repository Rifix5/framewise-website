'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function HowItWorks() {
  const { t, language } = useLanguage()

  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={t.howItWorks.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {t.howItWorks.title}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              {/* Large number accent */}
              <div
                className="text-[100px] font-black leading-none select-none gradient-text opacity-[0.18] mb-2 -ml-1"
                aria-hidden="true"
              >
                {step.number}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${language}-step-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="-mt-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
