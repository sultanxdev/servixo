import { HeroSection } from "@/components/website/sections/hero-section";
import { HowItWorksSection } from "@/components/website/sections/how-it-works-section";
import { ServicesSection } from "@/components/website/sections/services-section";
import { PremiumPlansSection } from "@/components/website/sections/premium-plans-section";
import { WhyChooseSection } from "@/components/website/sections/why-choose-section";
import { PartnerSection } from "@/components/website/sections/partner-section";
import { FaqSection } from "@/components/website/sections/faq-section";
import { CtaSection } from "@/components/website/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <PremiumPlansSection />
      <WhyChooseSection />
      <PartnerSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
