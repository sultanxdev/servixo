import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const { brand, footer } = siteConfig;

  return (
    <footer className="w-full bg-surface-container-high py-8 lg:py-space-xl pb-24 lg:pb-space-xl border-t border-outline-variant/30">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* ========================================================================= */}
        {/* DESKTOP FOOTER (Visible on lg and up)                                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-gutter mb-space-xl">
          <div className="col-span-4 flex flex-col gap-space-md">
            <Link href="/" className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} Logo`}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                {brand.name}
              </span>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              India&apos;s trusted subscription-based home services platform. Simplifying home care with predictable visits and approved professionals.
            </p>
            <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm bg-surface-container px-space-sm py-space-xs rounded-full w-fit">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified
              </span>
              <span>{brand.isoBadge}</span>
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Explore
            </span>
            <div className="flex flex-col gap-space-xs">
              {footer.exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Account
            </span>
            <div className="flex flex-col gap-space-xs">
              {footer.accountLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Support
            </span>
            <div className="flex flex-col gap-space-xs">
              {footer.supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg text-on-surface font-bold">
              Legal
            </span>
            <div className="flex flex-col gap-space-xs">
              {footer.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE FOOTER (Visible under lg)                                          */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center shadow-xs border border-outline-variant/30 overflow-hidden p-1">
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} Logo`}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                {brand.name}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              {brand.isoBadge}
            </span>
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            India&apos;s premier residential care, comprehensive home inspection, and verified technician subscription club.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-1">
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Explore
              </span>
              {footer.exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Support
              </span>
              {footer.supportLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 col-span-2 sm:col-span-1 pt-2 sm:pt-0">
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Legal &amp; Transparency
              </span>
              {footer.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM COPYRIGHT STRIP (Both Views)                                      */}
        {/* ========================================================================= */}
        <div className="pt-6 lg:pt-space-lg mt-6 border-t border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-[12px] lg:text-body-sm text-center md:text-left">
          <p>{brand.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <a
              href={`mailto:${brand.contactEmail}`}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>{brand.contactEmail}</span>
            </a>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>Toll-Free: {brand.tollFree}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
