import { siteConfig } from "@/config/site.config";

export function CtaSection() {
  const { cta } = siteConfig;

  return (
    <section className="w-full py-6 lg:py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
        {/* ========================================================================= */}
        {/* MOBILE CTA CARD (Visible under lg)                                        */}
        {/* ========================================================================= */}
        <div className="flex lg:hidden flex-col">
          <div className="p-6 rounded-2xl bg-primary text-on-primary shadow-md flex flex-col space-y-3.5 text-center items-center">
            <div className="w-12 h-12 rounded-full bg-surface-container-lowest/20 flex items-center justify-center text-on-primary shadow-inner">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <h2 className="font-headline-md text-headline-md font-bold tracking-tight text-on-primary">
              {cta.title}
            </h2>
            <p className="font-body-sm text-body-sm text-on-primary/80 max-w-xs leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col w-full gap-2 pt-2">
              <a
                href="#pincode-checker"
                className="w-full h-12 rounded-xl bg-surface-container-lowest text-primary font-label-lg text-label-lg font-bold shadow-md active:scale-95 transition-transform flex items-center justify-center gap-1.5"
              >
                <span>{cta.primaryBtnText}</span>
                <span className="material-symbols-outlined text-[18px]">near_me</span>
              </a>
              <a
                href="#plans"
                className="w-full h-11 rounded-xl bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                {cta.secondaryBtnText}
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CTA CARD (Visible on lg and up)                                   */}
        {/* ========================================================================= */}
        <div className="hidden lg:block bg-surface-container-lowest rounded-3xl p-space-lg md:p-space-xl shadow-sm text-center max-w-4xl mx-auto relative overflow-hidden border border-outline-variant/30">
          {/* Ambient decorative backdrop elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-tertiary-fixed/30 blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center mb-space-md shadow-sm border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-[30px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mb-space-xs max-w-xl">
              {cta.title}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-space-lg leading-relaxed">
              {cta.description}
            </p>

            <div className="flex items-center gap-space-md mb-6">
              <a
                href="#pincode-checker"
                className="h-12 px-space-xl bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-all"
              >
                <span>{cta.primaryBtnText}</span>
                <span className="material-symbols-outlined text-[18px]">near_me</span>
              </a>
              <a
                href="#plans"
                className="h-12 px-space-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-semibold rounded-lg transition-colors flex items-center justify-center border border-outline-variant/30"
              >
                {cta.secondaryBtnText}
              </a>
            </div>

            {/* Trust points */}
            <div className="flex items-center gap-6 text-on-surface-variant font-label-sm text-label-sm">
              {cta.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
