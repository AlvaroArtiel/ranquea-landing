import { LandingNav } from './components/landing/LandingNav'
import { LandingHero } from './components/landing/LandingHero'
import { LandingTrustBar } from './components/landing/LandingTrustBar'
import { LandingHowItWorks } from './components/landing/LandingHowItWorks'
import { LandingFeatureGallery } from './components/landing/LandingFeatureGallery'
import { LandingGallerySection } from './components/landing/LandingGallerySection'
import { LandingStats } from './components/landing/LandingStats'
import { LandingCaseStudy } from './components/landing/LandingCaseStudy'
import { LandingFeatureGrid } from './components/landing/LandingFeatureGrid'
import { LandingUseCases } from './components/landing/LandingUseCases'
import { LandingTestimonials } from './components/landing/LandingTestimonials'
import { LandingPricing } from './components/landing/LandingPricing'
import { LandingFAQ } from './components/landing/LandingFAQ'
import { LandingMakers } from './components/landing/LandingMakers'
import { LandingFinalCTA } from './components/landing/LandingFinalCTA'
import { LandingFooter } from './components/landing/LandingFooter'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <LandingNav />
      <LandingHero />
      <LandingTrustBar />
      <LandingHowItWorks />
      <LandingFeatureGallery />
      <LandingGallerySection />
      <LandingStats />
      <LandingCaseStudy />
      <LandingFeatureGrid />
      <LandingUseCases />
      <LandingTestimonials />
      <LandingPricing />
      <LandingFAQ />
      <LandingMakers />
      <LandingFinalCTA />
      <LandingFooter />
    </>
  )
}

export default App
