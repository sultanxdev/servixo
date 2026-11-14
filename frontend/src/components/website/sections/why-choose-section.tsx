import { siteConfig } from "@/config/site.config";

export function WhyChooseSection() {
  const { whyChoose } = siteConfig;

  return (
    <section className="w-full py-8 lg:py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="max-w-2xl mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            {whyChoose.subtitle}
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            {whyChoose.title}
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            {whyChoose.description}
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-gutter">
          {whyChoose.items.map((feature, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-xl p-5 lg:p-space-lg shadow-sm border border-outline-variant/30 hover:border-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-4 border border-outline-variant/30">
                <span className="material-symbols-outlined text-[22px]">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                {feature.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
