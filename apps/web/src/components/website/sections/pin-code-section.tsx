"use client";

import { useState } from "react";
import { MapPin, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PinCodeSection() {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"idle" | "available" | "unavailable">("idle");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    if (pincode.length !== 6) return;
    setIsChecking(true);
    // Simulated PIN check — connects to backend /api/v1/pincodes/check in production
    setTimeout(() => {
      setStatus("available");
      setIsChecking(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl text-center">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Check Service Availability</h2>
          <p className="text-muted-foreground mb-6">
            Enter your PIN code to see if Servixo is available in your area.
          </p>

          <div className="flex gap-3 max-w-sm mx-auto">
            <Input
              type="text"
              placeholder="Enter 6-digit PIN code"
              value={pincode}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                setPincode(val);
                setStatus("idle");
              }}
              maxLength={6}
            />
            <Button onClick={handleCheck} disabled={pincode.length !== 6 || isChecking}>
              {isChecking ? "Checking..." : "Check"}
            </Button>
          </div>

          {status === "available" && (
            <div className="mt-4 flex items-center justify-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Services available in your area!</span>
            </div>
          )}
          {status === "unavailable" && (
            <div className="mt-4 flex items-center justify-center gap-2 text-red-500">
              <XCircle className="h-5 w-5" />
              <span className="font-medium">Not yet available. We&apos;re expanding soon!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

