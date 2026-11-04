import Link from "next/link";
import { Home } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services/", label: "All Services" },
    { href: "/plans/", label: "Premium Plans" },
  ],
  Company: [
    { href: "/become-professional/", label: "Become a Professional" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Servixo</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Trusted home service professionals at your doorstep.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h3 className="font-semibold mb-3">{category}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Servixo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
