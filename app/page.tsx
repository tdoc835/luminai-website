import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DeploySection } from "@/components/deploy-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DeploySection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
