import Link from "next/link";

export function CtaSection() {
  return (
    <section className="w-full py-6 lg:py-space-xl bg-surface-container-low">
                <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
                  {/* ========================================================================= */}
                  {/* MOBILE CTA CARD (Visible under lg)                                        */}
                  {/* ========================================================================= */}
                  <div className="flex lg:hidden flex-col">
                    <div className="p-6 rounded-2xl bg-primary-container text-on-primary-container shadow-md flex flex-col space-y-3.5 text-center items-center">
                      <div className="w-12 h-12 rounded-full bg-surface-container-lowest/80 flex items-center justify-center text-primary shadow-inner">
                        <span className="material-symbols-outlined text-[24px]">verified</span>
                      </div>
                      <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary-fixed">
                        Make Home Services Easier with Servixo
                      </h2>
                      <p className="font-body-sm text-body-sm text-on-primary-fixed-variant max-w-xs leading-relaxed">
                        Join over 14,000+ satisfied residences enjoying planned care, verified security, and effortless scheduling.
                      </p>
                      <div className="flex flex-col w-full gap-2 pt-2">
                        <a
                          href="#pincode-checker"
                          className="w-full h-12 rounded-xl bg-on-primary-fixed text-primary-fixed font-label-lg text-label-lg font-bold shadow-md active:scale-95 transition-transform flex items-center justify-center gap-1.5"
                        >
                      <span>Check Availability</span>
                      <span className="material-symbols-outlined text-[18px]">location_searching</span>
                    </a>
                    <a
                      href="#plans"
                      className="w-full h-11 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container transition-colors flex items-center justify-center"
                    >
                      Explore Plans &amp; Pricing
                    </a>
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* DESKTOP CTA CARD (Visible on lg and up)                                   */}
              {/* ========================================================================= */}
              <div className="hidden lg:block bg-surface-container-lowest rounded-3xl p-space-lg md:p-space-xl shadow-[0_1px_3px_rgba(32,41,35,0.04),0_6px_16px_-4px_rgba(32,41,35,0.03)] text-center max-w-4xl mx-auto relative overflow-hidden border border-outline-variant/30">
                {/* Ambient decorative backdrop elements */}
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-space-md shadow-sm">
                    <span
                      className="material-symbols-outlined text-[30px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      roofing
                    </span>
                  </div>
                  <h2 className="font-display text-display text-on-surface tracking-tight mb-space-sm max-w-xl font-extrabold">
                    Make Home Services Easier with Servixo.
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
                    Explore available services and find a subscription plan that fits your needs. Trusted professionals are ready in your neighborhood.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-space-md">
                    <a
                      href="#pincode-checker"
                      className="h-12 px-space-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold rounded-lg flex items-center justify-center gap-2 shadow-[0_1px_3px_rgba(32,41,35,0.08),0_6px_16px_-4px_rgba(32,41,35,0.06)] active:scale-[0.99] transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px]">near_me</span>
                      <span>Check Availability</span>
                    </a>
                    <a
                      href="#plans"
                      className="h-12 px-space-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg flex items-center justify-center transition-colors"
                    >
                      Explore Plans
                    </a>
                  </div>
                  <div className="flex items-center gap-space-md mt-space-lg text-secondary font-body-sm text-body-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      No hidden fees
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      Cancel anytime policy
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">check</span>
                      GST invoices provided
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </section>
        );
}
