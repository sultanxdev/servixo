import Link from "next/link";

export function PartnerSection() {
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
                Partner With Us
              </span>
              <span className="text-[12px] text-surface-container-high opacity-80">
                Bengaluru &amp; Hyderabad
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface tracking-tight">
              Grow Your Trade with Servixo
            </h3>
            <p className="font-body-sm text-body-sm text-surface-container-high leading-relaxed">
              Join our vetted technician network. Enjoy weekly assured bank payouts, automated route optimization, and corporate insurance coverage.
            </p>
            <Link
              href="/become-professional/"
              className="self-start h-10 px-4 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform mt-1"
            >
              <span>Become a Professional</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (Rich 2-Column Portal Showcase)                              */}
        {/* ========================================================================= */}
        <div className="hidden lg:block bg-surface-container-lowest rounded-3xl p-space-lg md:p-space-xl shadow-[0_1px_3px_rgba(32,41,35,0.04),0_6px_16px_-4px_rgba(32,41,35,0.03)] overflow-hidden border border-outline-variant/30">
          <div className="grid grid-cols-12 gap-gutter items-center">
            {/* Left Column: Copy & Actions */}
            <div className="col-span-7 flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-2 block">
                For Service Technicians &amp; Contractors
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-sm">
                Grow Your Work with Servixo
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg max-w-xl leading-relaxed">
                Join the Servixo professional network and get consistent opportunities to provide home services in your verified service areas with prompt weekly payouts.
              </p>
              <div className="flex flex-wrap items-center gap-space-md">
                <Link
                  href="/become-professional/"
                  className="h-12 px-space-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold rounded-lg inline-flex items-center gap-2 shadow-[0_1px_3px_rgba(32,41,35,0.08),0_6px_16px_-4px_rgba(32,41,35,0.06)] active:scale-[0.99] transition-all"
                >
                  <span>Become a Professional</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/become-professional/"
                  className="h-12 px-space-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg inline-flex items-center transition-colors"
                >
                  View Partner Requirements
                </Link>
              </div>

              {/* Partner Perks Strip */}
              <div className="grid grid-cols-3 gap-space-sm mt-space-xl pt-space-md bg-surface-container-low/50 rounded-xl p-space-sm border border-outline-variant/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    payments
                  </span>
                  <span className="font-label-sm text-[12px] text-on-surface font-medium">
                    Weekly Direct Bank Settlement
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    near_me
                  </span>
                  <span className="font-label-sm text-[12px] text-on-surface font-medium">
                    Hyper-local Pin Route Optimisation
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    shield
                  </span>
                  <span className="font-label-sm text-[12px] text-on-surface font-medium">
                    Accidental Damage Cover
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Portal Snippet Preview Card */}
            <div className="col-span-5 relative">
              <div className="bg-surface-container-low rounded-2xl p-space-md shadow-sm border border-outline-variant/40">
                {/* Header Bar of the Mock Portal */}
                <div className="flex items-center justify-between pb-3 mb-3 bg-surface-container-lowest p-3 rounded-xl shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                      SP
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface block leading-tight font-bold">
                        Partner Allocation Portal
                      </span>
                      <span className="font-body-sm text-[11px] text-secondary">
                        ID: SRV-TECH-8492
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Active Dispatch
                  </span>
                </div>

                {/* Content Cards */}
                <div className="space-y-2.5">
                  <div className="bg-surface-container-lowest p-3 rounded-xl shadow-xs">
                    <div className="flex items-center justify-between text-body-sm text-[12px] text-secondary mb-1">
                      <span>Assigned Sector</span>
                      <span className="text-primary font-bold">PIN: 560103</span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface block font-bold">
                      Indiranagar &amp; HAL 2nd Stage
                    </span>
                    <span className="font-body-sm text-[11px] text-secondary">
                      3 confirmed jobs queued for tomorrow
                    </span>
                  </div>

                  <div className="bg-surface-container-lowest p-3 rounded-xl shadow-xs">
                    <div className="flex items-center justify-between text-body-sm text-[12px] text-secondary mb-1">
                      <span>Platform Kit &amp; Equipment</span>
                      <span className="text-on-surface font-semibold">Standardized</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary font-label-sm text-[12px] font-medium">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        build_circle
                      </span>
                      <span>Servixo tool equipment support enabled</span>
                    </div>
                  </div>

                  <div className="bg-primary-container text-on-primary-container p-3 rounded-xl flex items-center justify-between shadow-xs">
                    <div>
                      <span className="text-on-primary-container/80 font-body-sm text-[12px] block">
                        Estimated Fortnightly Earnings
                      </span>
                      <span className="font-headline-sm text-headline-sm font-extrabold">
                        ₹28,450
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[26px] text-primary-fixed">
                      account_balance_wallet
                    </span>
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

