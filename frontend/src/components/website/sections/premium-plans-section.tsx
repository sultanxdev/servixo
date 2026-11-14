import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function PremiumPlansSection() {
  const { plans } = siteConfig;
  const ledger = plans.ledgerPreview;

  return (
    <section id="plans" className="w-full py-8 lg:py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-space-xl">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-[11px] font-bold uppercase tracking-wider mb-2">
            {plans.subtitle}
          </div>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            {plans.title}
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            {plans.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* VISIT LEDGER PREVIEW WIDGET (From Image 3 & config)                       */}
        {/* ========================================================================= */}
        <div className="flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm space-y-3 max-w-xl mx-auto mb-6 lg:mb-space-lg border border-outline-variant/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-primary">
                pie_chart
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                {ledger.title}
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-secondary font-semibold px-2 py-0.5 rounded-full bg-secondary-container/50">
              {ledger.badge}
            </span>
          </div>

          {/* Visual Metric Bar */}
          <div className="flex flex-col space-y-1.5">
            <div className="w-full h-3 rounded-full bg-surface-container overflow-hidden flex">
              <div
                className="bg-primary h-full rounded-l-full transition-all duration-500"
                style={{ width: `${ledger.utilizedPercent}%` }}
              ></div>
              <div
                className="bg-secondary-container h-full rounded-r-full transition-all duration-500"
                style={{ width: `${100 - ledger.utilizedPercent}%` }}
              ></div>
            </div>
            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span>
                Utilized: <strong className="text-on-surface">{ledger.utilizedVisits} Visits</strong>
              </span>
              <span>
                Remaining: <strong className="text-secondary font-bold">{ledger.remainingVisits} Visits</strong>
              </span>
            </div>
          </div>

          {/* Ledger Summary Footnote */}
          <div className="p-2 rounded-lg bg-surface-container-low flex items-center justify-between text-[11px] text-on-surface-variant font-label-sm">
            <span>Total Allocation: {ledger.totalVisits} Dedicated Visits</span>
            <span>•</span>
            <span className="text-secondary font-semibold">{ledger.validityText}</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRICING CARDS GRID (3 Tiers)                                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-gutter items-stretch mb-8 lg:mb-space-xl">
          {plans.items.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl p-5 lg:p-space-lg shadow-sm flex flex-col justify-between border transition-all ${
                plan.isPopular
                  ? "bg-surface-container-lowest border-primary shadow-md relative"
                  : "bg-surface-container-lowest border-outline-variant/30"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container text-secondary font-medium">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-lg lg:font-display text-headline-lg lg:text-display font-bold text-on-surface">
                      {plan.price}
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      {plan.period}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {plan.description}
                  </p>
                </div>

                {/* Key Metric Metrics */}
                <div className="grid grid-cols-2 gap-2 p-2.5 bg-surface-container-low rounded-lg mb-4">
                  <div>
                    <span className="font-body-sm text-[12px] text-on-surface-variant block">Validity</span>
                    <span className="font-label-md text-label-md font-bold text-on-surface">
                      {plan.validity}
                    </span>
                  </div>
                  <div>
                    <span className="font-body-sm text-[12px] text-on-surface-variant block">Visits</span>
                    <span className="font-label-md text-label-md font-bold text-primary">
                      {plan.visits}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5 shrink-0">
                        check_circle
                      </span>
                      <span
                        className={`font-body-sm text-body-sm leading-snug ${
                          feature.highlighted
                            ? "font-semibold text-on-surface"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={plan.buttonHref}
                  className={`w-full py-2.5 px-4 rounded-lg font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90 text-on-primary"
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* VISUAL FLOW BREAKDOWN MODULE                                              */}
        {/* ========================================================================= */}
        <div className="bg-surface-container-lowest rounded-xl p-5 lg:p-space-lg shadow-sm border border-outline-variant/30 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">
              {plans.flowBreakdown.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {plans.flowBreakdown.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.flowBreakdown.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-surface-container-low flex flex-col items-center text-center"
              >
                <span className="font-body-sm text-[12px] text-on-surface-variant mb-1">
                  {st.label}
                </span>
                <span className="font-headline-md text-headline-md font-bold text-primary mb-1">
                  {st.value}
                </span>
                <span className="font-label-sm text-[12px] text-secondary font-medium">
                  {st.note}
                </span>
              </div>
            ))}
          </div>

          <p className="font-body-sm text-[11px] text-on-surface-variant/80 text-center mt-4">
            {plans.flowBreakdown.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
