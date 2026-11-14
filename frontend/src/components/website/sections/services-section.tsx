import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function ServicesSection() {
  const { services } = siteConfig;

  return (
    <section id="services" className="w-full py-8 lg:py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            {services.subtitle}
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            {services.title}
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            {services.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE SERVICES LIST                                                      */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col space-y-3">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    {service.icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    {service.mobileName || service.name}
                  </span>
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    {service.badge}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-secondary px-2 py-0.5 rounded-full bg-secondary-container/60">
                  {service.visits}
                </span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP SERVICES GRID                                                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-gutter mb-space-lg">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      {service.icon}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container text-primary font-medium">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                  {service.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-secondary font-semibold">
                  {service.visits}
                </span>
                <Link
                  href="#plans"
                  className="text-primary hover:underline flex items-center gap-0.5 font-semibold"
                >
                  <span>Book in Plan</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}

          {/* Dynamic Allocation Callout Card */}
          <div className="bg-gradient-to-br from-primary-container/20 to-secondary-container/30 rounded-xl p-space-lg border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md shadow-xs">
                <span className="material-symbols-outlined text-[24px]">
                  tune
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                {services.dynamicAllocationCard.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {services.dynamicAllocationCard.description}
              </p>
            </div>

            <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>{services.dynamicAllocationCard.guaranteeText}</span>
            </div>
          </div>
        </div>

        {/* Administrative Notice */}
        <p className="font-body-sm text-[12px] text-on-surface-variant/80 text-center mt-6">
          {services.complianceNotice}
        </p>
      </div>
    </section>
  );
}
