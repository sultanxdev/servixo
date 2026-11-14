import Link from "next/link";
import { siteConfig } from "@/config/site.config";

interface LegalHeaderProps {
  title: string;
  subtitle: string;
  activePath: string;
}

export function LegalHeader({ title, subtitle, activePath }: LegalHeaderProps) {
  const { legal, footer } = siteConfig;

  return (
    <div className="border-b border-outline-variant/30 bg-surface-container-low/50 py-8 lg:py-12">
      <div className="max-w-[1000px] mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Legal &amp; Transparency</span>
          <span>/</span>
          <span className="text-on-surface font-semibold">{title}</span>
        </div>

        {/* Badge & Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[11px] font-bold uppercase tracking-wider mb-3 border border-outline-variant/30">
          <span className="material-symbols-outlined text-[15px]">verified_user</span>
          <span>Legal &amp; Transparency</span>
        </div>

        <h1 className="font-headline-lg lg:font-display text-headline-lg lg:text-headline-lg font-bold text-on-surface tracking-tight mb-2">
          {title}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed mb-4">
          {subtitle}
        </p>

        <div className="flex items-center gap-2 text-xs text-secondary font-medium mb-6">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          <span>Last Updated: {legal.lastUpdated}</span>
        </div>

        {/* Quick Nav Switcher between all 4 Legal Pages */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {footer.legalLinks.map((link) => {
            const isActive = link.href === activePath;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-xs sm:text-sm px-4 py-2 rounded-full whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-primary text-on-primary font-semibold shadow-xs border-primary"
                    : "bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container border-outline-variant/30"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

