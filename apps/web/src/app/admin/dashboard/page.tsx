"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, UserCog, Calendar, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Customers", value: "0", icon: Users },
  { label: "Total Professionals", value: "0", icon: UserCog },
  { label: "Total Bookings", value: "0", icon: Calendar },
  { label: "Total Revenue", value: "₹0", icon: DollarSign },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
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
