import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const samplePlans = [
  {
    name: "Basic",
    price: "₹999",
    period: "/month",
    description: "Essential home maintenance",
    features: ["2 service visits", "Basic support", "48-hour scheduling"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹1,999",
    period: "/month",
    description: "Complete home care",
    features: ["5 service visits", "Priority support", "24-hour scheduling", "Free inspections"],
    popular: true,
  },
  {
    name: "Elite",
    price: "₹3,999",
    period: "/month",
    description: "Ultimate home management",
    features: ["Unlimited visits", "Dedicated manager", "Same-day service", "Premium professionals"],
    popular: false,
  },
];

export function PremiumPlansSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Premium Plans</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Subscribe to a plan and save on regular home services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {samplePlans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary shadow-lg relative" : ""}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup/" className="w-full">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
