'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.09] rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all duration-200'

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${language}-contact-title`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t.contact.title}
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">{t.contact.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-10 gap-4 text-center"
            >
              <CheckCircle size={40} className="text-indigo-400" />
              <p className="text-white font-semibold text-lg">{t.contact.success}</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.form
                key={language}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                {error && (
                  <p className="text-red-400 text-sm text-center">{t.contact.error}</p>
                )}
                <button type="submit" disabled={sending} className="btn-primary w-full py-3 text-sm disabled:opacity-50">
                  {t.contact.send}
                </button>
              </motion.form>
            </AnimatePresence>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-zinc-400 text-sm"
        >
          <a href={`mailto:${t.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={15} className="text-indigo-400" />
            {t.contact.email}
          </a>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-zinc-600" />
          <span className="flex items-center gap-2">
            <Phone size={15} className="text-indigo-400" />
            {t.contact.phone}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
