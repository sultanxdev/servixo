import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PlanCard({ name, price, period, description, features, popular }: PlanCardProps) {
  return (
    <Card className={cn(popular && "border-primary shadow-lg relative")}>
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
      )}
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/signup/" className="w-full">
          <Button className="w-full" variant={popular ? "default" : "outline"}>
            Get Started
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
