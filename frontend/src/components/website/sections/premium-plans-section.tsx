import Link from "next/link";

export function PremiumPlansSection() {
  return (
    <section id="plans" className="w-full py-8 lg:py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-space-xl">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[11px] font-bold uppercase tracking-wider mb-2">
            Simple Predictable Pricing
          </div>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            One Subscription. Multiple Service Visits.
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            Choose a plan that works for your home and manage your service visits from one place without unpredictable billing.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VISIT LEDGER PREVIEW WIDGET                                               */}
        {/* ========================================================================= */}
        <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm space-y-3 max-w-xl mx-auto mb-6 lg:mb-space-lg border border-outline-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">
                pie_chart
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Member Visit Ledger Preview
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-secondary font-semibold px-2 py-0.5 rounded-full bg-secondary-container/50">
              Live Simulation
            </span>
          </div>

          {/* Visual Metric Bar */}
          <div className="flex flex-col space-y-1.5">
            <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden flex">
              <div
                className="bg-primary h-full rounded-l-full transition-all duration-500"
                style={{ width: "40%" }}
              ></div>
              <div
                className="bg-secondary-container h-full rounded-r-full transition-all duration-500"
                style={{ width: "60%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span>
                Utilized: <strong className="text-on-surface">4 Visits</strong>
              </span>
              <span>
                Remaining: <strong className="text-secondary font-bold">6 Visits</strong>
              </span>
            </div>
          </div>

          {/* Ledger Summary Footnote */}
          <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between text-[11px] text-on-surface-variant font-label-sm">
            <span>Total Allocation: 10 Dedicated Visits</span>
            <span>•</span>
            <span className="text-secondary font-semibold">Valid for 8 Months</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRICING CARDS STACK / GRID (3 Tiers)                                      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-gutter items-stretch mb-8 lg:mb-space-xl">
          {/* Plan 1: Essential */}
          <div className="bg-surface-container-lowest rounded-xl p-5 lg:p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Servixo Essential
                </h3>
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-medium">
                  6 Months
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg lg:font-display text-headline-lg lg:text-display font-bold text-on-surface">
                    ₹2,499
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    / 6 Months
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary mt-1">
                  Ideal for compact apartments and routine plumbing or electrical repairs.
                </p>
              </div>

              {/* Key Metric Metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg mb-4">
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">Validity</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    6 Months
                  </span>
                </div>
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">
                    Included Visits
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    4 Dedicated
                  </span>
                </div>
              </div>

              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-2.5 font-semibold">
                Plan Privileges
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Plumbing and Electrical triage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Standard 48-hr slot allocation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Basic seasonal appliance checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Live Remaining Visit Ledger</span>
                </li>
              </ul>
            </div>
            <Link
              href="/signup/"
              className="w-full h-11 flex items-center justify-center font-label-md text-label-md text-on-surface bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container rounded-lg font-bold transition-all active:scale-[0.99]"
            >
              Select Essential
            </Link>
          </div>

          {/* Plan 2: Comprehensive (Featured / Most Popular) */}
          <div className="relative bg-surface-container-lowest rounded-xl p-5 lg:p-space-lg shadow-md lg:shadow-[0_16px_36px_-8px_rgba(32,41,35,0.12)] border-2 border-primary flex flex-col justify-between">
            {/* Featured Ribbon Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wide uppercase font-bold shadow-sm">
              MOST POPULAR
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Servixo Comprehensive
                </h3>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  12 Months
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg lg:font-display text-headline-lg lg:text-display font-bold text-primary">
                    ₹4,999
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    / 12 Months
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary mt-1">
                  Complete seasonal protection for modern 2–3 BHK residences.
                </p>
              </div>

              {/* Key Metric Metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-secondary-container/50 rounded-lg mb-4">
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">Validity</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    12 Months
                  </span>
                </div>
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">
                    Included Visits
                  </span>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    10 Dedicated
                  </span>
                </div>
              </div>

              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary block mb-2.5 font-bold">
                Plan Privileges
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span className="font-medium text-on-surface">
                    AC deep clean &amp; diagnostic tune-up
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Deep kitchen &amp; bathroom sanitation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Plumbing, carpentry &amp; power audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span className="font-medium text-on-surface">
                    Express 12-hour arrival guarantee
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Real-time technician GPS tracking</span>
                </li>
              </ul>
            </div>
            <Link
              href="/signup/"
              className="w-full h-11 flex items-center justify-center font-label-md text-label-md text-on-primary-container bg-primary-container hover:opacity-95 rounded-lg font-bold shadow-sm transition-all active:scale-[0.99]"
            >
              Choose Comprehensive Plan
            </Link>
          </div>

          {/* Plan 3: Estate & Villa */}
          <div className="bg-surface-container-lowest rounded-xl p-5 lg:p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Estate &amp; Villa
                </h3>
                <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-medium">
                  12 Months
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-lg lg:font-display text-headline-lg lg:text-display font-bold text-on-surface">
                    ₹8,999
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    / 12 Months
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary mt-1">
                  Designed for spacious independent bungalows, villas, and estates.
                </p>
              </div>

              {/* Key Metric Metrics */}
              <div className="grid grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg mb-4">
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">Validity</span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    12 Months
                  </span>
                </div>
                <div>
                  <span className="font-body-sm text-[12px] text-secondary block">
                    Included Visits
                  </span>
                  <span className="font-label-md text-label-md text-primary font-semibold">
                    20 Dedicated
                  </span>
                </div>
              </div>

              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary block mb-2.5 font-semibold">
                Plan Privileges
              </span>
              <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant mb-6">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Bi-annual structural inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span className="font-medium text-on-surface">
                    Dedicated personal residential manager
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Priority dispatch within 4 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary shrink-0">
                    check_circle
                  </span>
                  <span>Extended 60-day revisit warranty</span>
                </li>
              </ul>
            </div>
            <Link
              href="/signup/"
              className="w-full h-11 flex items-center justify-center font-label-md text-label-md text-on-surface bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container rounded-lg font-bold transition-all active:scale-[0.99]"
            >
              Select Estate Tier
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXPLANATORY VISIT COUNTER MODULE (Below Cards)                            */}
        {/* ========================================================================= */}
        <div className="bg-surface-container-lowest p-5 lg:p-space-lg rounded-xl shadow-sm max-w-4xl mx-auto border border-outline-variant/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-md">
            <div>
              <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                How Your Visits Count Works
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Every service booking deducts exactly from your prepaid quota in real time.
              </p>
            </div>
            <span className="font-label-sm text-label-sm px-2.5 py-1 rounded-full bg-surface-container text-primary font-semibold self-start md:self-auto">
              Transparent Ledger
            </span>
          </div>

          {/* Visual Flow Breakdown Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-gutter items-center py-2">
            {/* Step 1 */}
            <div className="p-space-sm bg-surface-container-low rounded-lg text-center">
              <span className="font-body-sm text-[12px] text-secondary block">
                Total Plan Allocation
              </span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">
                10 Visits
              </span>
              <span className="font-label-sm text-[11px] text-primary block mt-0.5 font-medium">
                Purchased Upfront
              </span>
            </div>
            {/* Step 2 */}
            <div className="p-space-sm bg-surface-container-high rounded-lg text-center">
              <span className="font-body-sm text-[12px] text-secondary block">
                Utilized Home Visits
              </span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold">
                4 Visits
              </span>
              <span className="font-label-sm text-[11px] text-secondary block mt-0.5 font-medium">
                AC Cleaning + Plumbing
              </span>
            </div>
            {/* Step 3 */}
            <div className="p-space-sm bg-primary-container text-on-primary-container rounded-lg text-center shadow-sm">
              <span className="font-body-sm text-[12px] text-on-primary-container/80 block">
                Remaining Quota
              </span>
              <span className="font-headline-md text-headline-md font-bold">
                6 Visits
              </span>
              <span className="font-label-sm text-[11px] text-on-primary-container font-semibold block mt-0.5">
                Valid for 8 Months
              </span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-secondary mt-3 text-center">
            * Plan eligibility, visit deduction policies and covered services are defined by your active subscription policy.
          </p>
        </div>
      </div>
    </section>
  );
}
