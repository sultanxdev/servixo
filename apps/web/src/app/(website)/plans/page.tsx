import { PremiumPlansSection } from "@/components/website/sections/premium-plans-section";

export default function PlansPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Premium Plans</h1>
        <p className="text-muted-foreground mb-8">
          Choose a plan that fits your home maintenance needs.
        </p>
      </div>
      <PremiumPlansSection />
    </div>
  );
}
