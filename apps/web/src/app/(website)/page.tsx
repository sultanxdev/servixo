import { HeroSection } from "@/components/website/sections/hero-section";
import { PinCodeSection } from "@/components/website/sections/pin-code-section";
import { ServicesSection } from "@/components/website/sections/services-section";
import { PremiumPlansSection } from "@/components/website/sections/premium-plans-section";
import { HowItWorksSection } from "@/components/website/sections/how-it-works-section";
import { FaqSection } from "@/components/website/sections/faq-section";
import { CtaSection } from "@/components/website/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PinCodeSection />
      <ServicesSection />
      <PremiumPlansSection />
      <HowItWorksSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

