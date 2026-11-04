import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Home Services,{" "}
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            Book trusted professionals for all your home service needs.
            Subscribe to premium plans and enjoy hassle-free maintenance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/plans/">
              <Button size="lg" className="gap-2">
                View Plans <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services/">
              <Button size="lg" variant="outline">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { icon: Shield, label: "Verified Professionals" },
            { icon: Clock, label: "On-Time Service" },
            { icon: Star, label: "Quality Guaranteed" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
