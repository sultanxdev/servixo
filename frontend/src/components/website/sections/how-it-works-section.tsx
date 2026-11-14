import { siteConfig } from "@/config/site.config";

export function HowItWorksSection() {
  const { howItWorks } = siteConfig;

  return (
    <section id="how-it-works" className="w-full py-8 lg:py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            {howItWorks.subtitle}
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            {howItWorks.title}
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE STEPPER (Vertical connected with line)                             */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden relative flex-col space-y-5 pl-2">
          {/* Vertical connecting line */}
          <div className="absolute left-[24px] top-4 bottom-6 w-0.5 bg-surface-container-highest -z-0"></div>

          {howItWorks.steps.map((step) => (
            <div key={step.stepNumber} className="relative flex items-start gap-3.5 z-10">
              <div className="w-9 h-9 rounded-full bg-primary text-on-primary font-headline-sm text-[13px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                {step.stepNumber}
              </div>
              <div className="flex flex-col bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-1 border border-outline-variant/30">
                <div className="flex items-center gap-1.5">
                  <span className="font-label-lg text-label-lg font-bold text-on-surface">
                    {step.title}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    {step.icon}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP STEPPER (Horizontal 4-grid cards)                                 */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-gutter relative">
          {howItWorks.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container-low text-primary flex items-center justify-center mb-space-md border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[24px]">
                    {step.icon}
                  </span>
                </div>
                <div className="font-headline-sm text-headline-sm font-bold text-primary mb-1">
                  {step.stepNumber}
                </div>
                <h3 className="font-headline-sm text-[18px] font-bold text-on-surface mb-2">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
