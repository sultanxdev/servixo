"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Home } from "lucide-react";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"customer" | "professional">("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signUp.email({ name, email, password });
      router.push("/customer/dashboard/");
    } catch (_err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1">
              <img src="/logo/logo.png" alt="Servixo Logo" className="h-8 w-auto object-contain" />
            </div>
            <span className="text-xl font-bold text-primary">Servixo</span>
          </Link>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Get started with Servixo</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">I am a</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={role === "customer"}
                    onChange={() => setRole("customer")}
                    className="accent-primary"
                  />
                  <span className="text-sm">Customer</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value="professional"
                    checked={role === "professional"}
                    onChange={() => setRole("professional")}
                    className="accent-primary"
                  />
                  <span className="text-sm">Professional</span>
                </label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
            <p className="text-[12px] text-muted-foreground text-center leading-snug">
              By registering, you agree to our{" "}
              <Link href="/terms-and-conditions/" className="text-primary hover:underline font-medium">
                Terms &amp; Conditions
              </Link>
              ,{" "}
              <Link href="/subscription-terms/" className="text-primary hover:underline font-medium">
                Subscription Terms
              </Link>
              , and acknowledge our{" "}
              <Link href="/privacy-policy/" className="text-primary hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Already have an account?{" "}
              <Link href="/login/" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

