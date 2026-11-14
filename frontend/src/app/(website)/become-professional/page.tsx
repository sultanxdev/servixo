import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, DollarSign, Clock, Users } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Earn More", description: "Competitive payouts for every completed job." },
  { icon: Clock, title: "Flexible Schedule", description: "Work when you want, where you want." },
  { icon: Users, title: "Growing Customer Base", description: "Access to a steady stream of customers." },
  { icon: Briefcase, title: "Professional Growth", description: "Build your reputation and expand your business." },
];

export default function BecomeProfessionalPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Servixo as a Professional</h1>
          <p className="text-lg text-muted-foreground">
            Partner with us and grow your home service business.
          </p>
          <Link href="/signup/" className="mt-8 inline-block">
            <Button size="lg">Apply Now</Button>
          </Link>
          <p className="text-xs text-muted-foreground mt-3">
            All professional applications and documents are securely handled in accordance with our{" "}
            <Link href="/terms-and-conditions/" className="text-primary hover:underline">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/data-storage/" className="text-primary hover:underline">
              Data Storage &amp; Security
            </Link>{" "}
            policies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="rounded-lg bg-primary/10 p-3 h-fit">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

