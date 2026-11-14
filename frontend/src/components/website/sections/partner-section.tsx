import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function PartnerSection() {
  const { partner } = siteConfig;

  return (
    <section className="w-full py-6 lg:py-space-xl bg-surface-container">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* ========================================================================= */}
        {/* MOBILE VIEW (High-Contrast Dark Banner)                                   */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col">
          <div className="relative overflow-hidden rounded-2xl bg-inverse-surface p-5 text-inverse-on-surface shadow-md flex flex-col space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[11px] font-bold">
                {partner.badge}
              </span>
              <span className="text-[12px] text-surface-container-high opacity-80">
                {partner.cities}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface tracking-tight">
              {partner.title}
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
              {partner.description}
            </p>
            <Link
              href={partner.ctaHref}
              className="self-start h-10 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform mt-1"
            >
              <span>{partner.ctaText}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (Rich 2-Column Portal Showcase)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:block bg-surface-container-lowest rounded-3xl p-space-lg md:p-space-xl shadow-sm overflow-hidden border border-outline-variant/30">
          <div className="grid grid-cols-12 gap-gutter items-center">
            {/* Left Column: Copy & Actions */}
            <div className="col-span-7 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-2 block">
                {partner.badge}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
                {partner.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg max-w-xl leading-relaxed">
                {partner.description}
              </p>

              <div className="flex flex-wrap items-center gap-space-md mb-6">
                <Link
                  href={partner.ctaHref}
                  className="h-12 px-space-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md font-bold rounded-lg inline-flex items-center gap-2 shadow-sm active:scale-[0.99] transition-all"
                >
                  <span>{partner.ctaText}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href={partner.ctaHref}
                  className="h-12 px-space-md font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span>{partner.requirementsText}</span>
                  <span className="material-symbols-outlined text-[18px]">launch</span>
                </Link>
              </div>

              {/* Perks Row */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-outline-variant/30">
                {partner.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      {perk.icon}
                    </span>
                    <span className="font-label-sm text-[12px] text-on-surface-variant font-medium">
                      {perk.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Mock Mobile Partner Portal */}
            <div className="col-span-5 flex justify-center">
              <div className="w-full max-w-[340px] rounded-2xl bg-surface-container-low p-4 shadow-md border border-outline-variant/30">
                <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-3">
                  <span className="font-label-sm text-[12px] text-on-surface-variant font-medium">
                    {partner.mockPortal.portalId}
                  </span>
                  <span className="text-[11px] font-semibold text-secondary px-2 py-0.5 rounded-full bg-secondary-container">
                    {partner.mockPortal.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                    <span className="text-[11px] text-on-surface-variant block">Assigned Sector</span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      {partner.mockPortal.assignedSector}
                    </span>
                    <span className="text-[11px] text-secondary font-medium">
                      PIN: {partner.mockPortal.sectorPincode}
                    </span>
                  </div>

                  <div className="p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/20">
                    <span className="text-[11px] text-on-surface-variant block">Weekly Earnings</span>
                    <span className="font-headline-sm text-headline-sm font-bold text-primary">
                      {partner.mockPortal.estimatedEarnings}
                    </span>
                    <span className="text-[11px] text-secondary font-medium block">
                      Direct Bank Settlement
                    </span>
                  </div>

                  <div className="text-[11px] text-on-surface-variant flex items-center gap-1.5 pt-1">
                    <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
                    <span>{partner.mockPortal.equipmentStatus}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
