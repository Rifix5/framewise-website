'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Pricing() {
  const { t, language } = useLanguage()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const { otherServices } = t.pricing

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section title ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={t.pricing.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              {t.pricing.title}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* ── Website package cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Animated gradient border on recommended card */}
              {plan.recommended && (
                <div
                  className="absolute -inset-[1px] rounded-[13px] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientSweep 3s linear infinite',
                    WebkitMask:
                      'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px',
                  }}
                />
              )}

              <div
                className={`glass-card p-8 flex flex-col h-full ${
                  plan.recommended ? 'shadow-[0_0_40px_rgba(99,102,241,0.08)]' : ''
                }`}
              >
                {plan.recommended && (
                  <span className="inline-block mb-4 text-[11px] font-bold uppercase tracking-widest gradient-text">
                    Recommended
                  </span>
                )}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${language}-plan-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1"
                  >
                    <h3 className="text-base font-semibold text-zinc-300 mb-1">{plan.name}</h3>
                    <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feat, j) => (
                        <li key={j} className="flex items-start gap-3 text-zinc-400 text-sm">
                          <Check size={15} className="text-indigo-400 mt-0.5 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => scrollTo('contact')}
                      className={`w-full py-3 text-sm font-semibold ${
                        plan.recommended ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Website packages footnote */}
        <AnimatePresence mode="wait">
          <motion.p
            key={t.pricing.note}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center text-zinc-500 text-sm mb-24"
          >
            {t.pricing.note}
          </motion.p>
        </AnimatePresence>

        {/* ── Other services ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.h3
              key={otherServices.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              {otherServices.title}
            </motion.h3>
          </AnimatePresence>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {otherServices.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="glass-card p-8 flex flex-col h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${language}-other-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col flex-1"
                  >
                    <h3 className="text-base font-semibold text-zinc-300 mb-1">{card.title}</h3>
                    <p className="text-3xl font-bold text-white mb-5">{card.price}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                      {card.description}
                    </p>
                    <button
                      onClick={() => scrollTo('contact')}
                      className="btn-secondary w-full py-3 text-sm font-semibold"
                    >
                      {card.cta}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other services footnote */}
        <AnimatePresence mode="wait">
          <motion.p
            key={otherServices.note}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-center text-zinc-500 text-sm"
          >
            {otherServices.note}
          </motion.p>
        </AnimatePresence>

      </div>
    </section>
  )
}
