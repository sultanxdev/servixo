import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-primary px-6 py-16 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Join thousands of homeowners who trust Servixo for their home service needs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup/">
              <Button size="lg" variant="secondary" className="gap-2">
                Create Free Account <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/become-professional/">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Join as Professional
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
