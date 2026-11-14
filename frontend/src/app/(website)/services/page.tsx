import { ServicesSection } from "@/components/website/sections/services-section";

export default function ServicesPage() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Our Services</h1>
        <p className="text-muted-foreground mb-8">
          Browse all the home services we offer.
        </p>
      </div>
      <ServicesSection />
    </div>
  );
}

