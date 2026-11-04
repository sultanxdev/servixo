import { Wrench, Zap, Droplets, PaintBucket, Bug, Wind } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sampleServices = [
  { icon: Wrench, name: "Plumbing", description: "Repairs, installations & maintenance" },
  { icon: Zap, name: "Electrical", description: "Wiring, fixtures & appliance repair" },
  { icon: Droplets, name: "Cleaning", description: "Deep cleaning & regular maintenance" },
  { icon: PaintBucket, name: "Painting", description: "Interior & exterior painting" },
  { icon: Bug, name: "Pest Control", description: "Safe & effective pest treatment" },
  { icon: Wind, name: "AC Service", description: "Installation, repair & servicing" },
];

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Professional home services covering everything your home needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sampleServices.map(({ icon: Icon, name, description }) => (
            <Card key={name} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
