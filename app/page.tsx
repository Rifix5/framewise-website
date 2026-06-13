import CursorGlow from '@/components/CursorGlow'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import WhyUs from '@/components/WhyUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
