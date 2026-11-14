export function WhyChooseSection() {
  const features = [
    {
      icon: "location_on",
      iconBg: "bg-secondary-container/50",
      iconColor: "text-secondary",
      title: "PIN-Bound Readiness",
      desc: "Pinpoint eligibility via verified postal mapping so you only view and book technicians physically stationed within your immediate precinct.",
    },
    {
      icon: "loyalty",
      iconBg: "bg-primary-container/40",
      iconColor: "text-primary",
      title: "Upfront Fixed Visits",
      desc: "Prepaid structured visits with zero surge charges during festivals, monsoon seasons, or peak emergency morning hours.",
    },
    {
      icon: "touch_app",
      iconBg: "bg-tertiary-fixed/60",
      iconColor: "text-tertiary",
      title: "3-Tap Easy Booking",
      desc: "Effortlessly schedule visits with your preferred date and time, specific room instructions, and custom technician preferences.",
    },
    {
      icon: "route",
      iconBg: "bg-secondary-container/50",
      iconColor: "text-secondary",
      title: "Live Job Tracking",
      desc: "Transparent status from initial dispatch, technician in-transit verification, on-site diagnostics, to digital completion sign-off.",
    },
    {
      icon: "badge",
      iconBg: "bg-primary-container/40",
      iconColor: "text-primary",
      title: "Approved Professionals",
      desc: "Rigorous police background verification, technical qualification checks, and standardized tool audits before any pro is onboarded.",
    },
    {
      icon: "hub",
      iconBg: "bg-tertiary-fixed/60",
      iconColor: "text-tertiary",
      title: "Centralised Management",
      desc: "One unified portal to review past job logs, access GST compliant tax invoices, track remaining visit quotas, and coordinate renewals.",
    },
  ];

  return (
    <section className="w-full py-8 lg:py-space-xl">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            Uncompromising Quality
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            Engineered for Predictable, Hassle-Free Home Care
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            Built specifically around actual platform capabilities without false guarantees or artificial claims.
          </p>
        </div>

        {/* Features Grid: 2-col on mobile, 3-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-gutter">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-3.5 lg:p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-2 border border-outline-variant/30"
            >
              <div
                className={`w-8 h-8 lg:w-11 lg:h-11 rounded-lg ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0 mb-1 lg:mb-space-sm`}
              >
                <span className="material-symbols-outlined text-[18px] lg:text-[22px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-label-md lg:font-headline-sm text-label-md lg:text-headline-sm font-bold text-on-surface leading-tight">
                {item.title}
              </h3>
              <p className="font-body-sm text-[12px] lg:text-body-sm text-on-surface-variant leading-snug lg:leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

