import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { Analytics } from '@vercel/analytics/next'

// TODO: Replace Inter with Geist once available via next/font/google in your Next.js version:
// import { Geist } from 'next/font/google'
// const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Framewise OÜ — IT & AI Services',
  description:
    'Websites, AI tools, and custom integrations — built to work, built to last.',
  openGraph: {
    title: 'Framewise OÜ — IT & AI Services',
    description:
      'Websites, AI tools, and custom integrations — built to work, built to last.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#080808] text-white antialiased`}>
        {/* Full-page aurora background — fixed, sits behind all content */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div
            className="absolute top-[15%] left-[10%] w-[700px] h-[700px] rounded-full opacity-[0.18]"
            style={{
              background: 'radial-gradient(circle at center, #6366f1 0%, transparent 70%)',
              filter: 'blur(80px)',
              animation: 'aurora-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-[50%] right-[8%] w-[580px] h-[580px] rounded-full opacity-[0.13]"
            style={{
              background: 'radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)',
              filter: 'blur(100px)',
              animation: 'aurora-2 10s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[10%] left-[35%] w-[500px] h-[500px] rounded-full opacity-[0.09]"
            style={{
              background: 'radial-gradient(circle at center, #06b6d4 0%, transparent 70%)',
              filter: 'blur(120px)',
              animation: 'aurora-3 14s ease-in-out infinite',
            }}
          />
        </div>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
