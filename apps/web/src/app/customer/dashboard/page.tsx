"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, CreditCard, Wrench, Clock } from "lucide-react";

const stats = [
  { label: "Active Subscriptions", value: "0", icon: CreditCard },
  { label: "Total Bookings", value: "0", icon: Calendar },
  { label: "Upcoming Services", value: "0", icon: Clock },
  { label: "Services Used", value: "0", icon: Wrench },
];

export default function CustomerDashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Welcome back!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {label}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
