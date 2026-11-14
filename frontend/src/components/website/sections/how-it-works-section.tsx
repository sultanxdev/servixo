export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-8 lg:py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            Clear &amp; Predictable Process
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            How Servixo Works
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            A structured, reliable subscription model designed around your home’s seasonal and everyday needs.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE STEPPER (Vertical connected with line)                             */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden relative flex-col space-y-5 pl-2">
          {/* Vertical connecting line */}
          <div className="absolute left-[24px] top-4 bottom-6 w-0.5 bg-surface-container-highest -z-0"></div>

          {/* Step 1 */}
          <div className="relative flex items-start gap-3.5 z-10">
            <div className="w-9 h-9 rounded-full bg-primary text-on-primary font-headline-sm text-[13px] font-bold flex items-center justify-center shrink-0 shadow-sm">
              01
            </div>
            <div className="flex flex-col bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Check Availability
                </span>
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  explore
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Enter your PIN code to see which services are active in your locality.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex items-start gap-3.5 z-10">
            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container font-headline-sm text-[13px] font-bold flex items-center justify-center shrink-0 shadow-sm">
              02
            </div>
            <div className="flex flex-col bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Choose Your Plan
                </span>
                <span className="material-symbols-outlined text-[16px] text-primary">
                  receipt_long
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Explore plans with upfront dedicated visits and eligible service packages.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex items-start gap-3.5 z-10">
            <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container font-headline-sm text-[13px] font-bold flex items-center justify-center shrink-0 shadow-sm">
              03
            </div>
            <div className="flex flex-col bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Book Your Service
                </span>
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  calendar_clock
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Select date, arrival window, and specific instructions with zero surprise fees.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex items-start gap-3.5 z-10">
            <div className="w-9 h-9 rounded-full bg-secondary text-on-secondary font-headline-sm text-[13px] font-bold flex items-center justify-center shrink-0 shadow-sm">
              04
            </div>
            <div className="flex flex-col bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex-1">
              <div className="flex items-center gap-1.5">
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Get Your Professional
                </span>
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  handyman
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Our central operations team assigns a vetted, trade-certified technician to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP STEPPER (Horizontal 4-grid with connected line)                   */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-4 gap-gutter relative">
          {/* Connecting Line Background for Large screens */}
          <div className="absolute top-9 left-16 right-16 h-[2px] bg-outline-variant/60 -z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(32,41,35,0.04)]">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[24px]">location_searching</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-outline-variant">
                01
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
              Check Availability
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Enter your PIN code to see which services are active and eligible in your designated locality.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(32,41,35,0.04)]">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">card_membership</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-outline-variant">
                02
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
              Choose Your Plan
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Explore premium plans based on validity periods, included visits, and eligible service coverage.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(32,41,35,0.04)]">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">calendar_month</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-outline-variant">
                03
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
              Book Your Service
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Select an available service, address, preferred date and time slot from your personal dashboard.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(32,41,35,0.04)]">
            <div className="flex items-center justify-between mb-space-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">engineering</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-outline-variant">
                04
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1.5 font-bold">
              Get Your Professional
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Our team allocates a vetted, trade-certified professional directly to your doorstep with equipment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
