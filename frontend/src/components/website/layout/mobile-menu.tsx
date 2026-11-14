"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  links: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export function MobileMenu({ links, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden border-t bg-background">
      <nav className="container py-4 flex flex-col space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <div className="flex flex-col space-y-2 pt-4 border-t">
          <Link href="/login/" onClick={onClose}>
            <Button variant="outline" className="w-full">Log in</Button>
          </Link>
          <Link href="/signup/" onClick={onClose}>
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

