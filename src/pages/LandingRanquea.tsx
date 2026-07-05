import { LandingNav } from '@/components/landing/LandingNav.ranquea'
import { LandingHero } from '@/components/landing/LandingHero.ranquea'
import { LandingFeatureGrid } from '@/components/landing/LandingFeatureGrid.ranquea'
import { LandingFeatureGallery } from '@/components/landing/LandingFeatureGallery.ranquea'
import { LandingFeatureRankings } from '@/components/landing/LandingFeatureRankings.ranquea'
import { LandingUseCases } from '@/components/landing/LandingUseCases.ranquea'
import { LandingTestimonials } from '@/components/landing/LandingTestimonials.ranquea'
import { LandingPricing } from '@/components/landing/LandingPricing.ranquea'
import { LandingFAQ } from '@/components/landing/LandingFAQ.ranquea'
import { LandingFinalCTA } from '@/components/landing/LandingFinalCTA.ranquea'
import { LandingFooter } from '@/components/landing/LandingFooter.ranquea'

export function LandingRanquea() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <LandingNav />
      <main>
        <LandingHero />
        <LandingFeatureGrid />
        <LandingFeatureGallery />
        <LandingFeatureRankings />
        <LandingUseCases />
        <LandingTestimonials />
        <LandingPricing />
        <LandingFAQ />
        <LandingFinalCTA />
      </main>
      <LandingFooter />
    </div>
  )
}
