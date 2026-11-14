import { UserPlus, Search, Calendar, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your free account in seconds.",
  },
  {
    icon: Search,
    title: "Choose a Service",
    description: "Browse services or pick a subscription plan.",
  },
  {
    icon: Calendar,
    title: "Book a Visit",
    description: "Schedule at your convenience. We match you with a verified professional.",
  },
  {
    icon: ThumbsUp,
    title: "Get It Done",
    description: "Sit back while our professional takes care of everything.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Four simple steps to a well-maintained home.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary mb-1">
                Step {index + 1}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

