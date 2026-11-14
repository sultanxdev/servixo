import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      id: "cleaning",
      name: "Home Cleaning",
      mobileName: "Home Cleaning",
      icon: "cleaning_services",
      iconBg: "bg-primary-container/40",
      iconColor: "text-primary",
      badge: "Included in All Plans",
      badgeClass: "bg-surface-container text-primary",
      desc: "Comprehensive deep scrubbing, mechanized floor cleaning, kitchen degreasing, bathroom sanitation, and sofa upholstery shampooing.",
      visits: "1 plan visit",
      mobileTier: "Included in All Plans",
    },
    {
      id: "plumbing",
      name: "Plumbing Repairs",
      mobileName: "Plumbing Repairs",
      icon: "plumbing",
      iconBg: "bg-tertiary-fixed/60",
      iconColor: "text-tertiary",
      badge: "Essential & Up",
      badgeClass: "bg-surface-container-high text-on-surface-variant",
      desc: "Emergency leak stoppage, tap & shower mixer replacement, drain unblocking, concealed pipe repairs, and overhead water tank inspection.",
      visits: "1 plan visit",
      mobileTier: "Essential & Up",
    },
    {
      id: "electrical",
      name: "Electrical Repairs",
      mobileName: "Electrical Repairs",
      icon: "bolt",
      iconBg: "bg-secondary-container/50",
      iconColor: "text-secondary",
      badge: "Essential & Up",
      badgeClass: "bg-surface-container-high text-on-surface-variant",
      desc: "Switchboard diagnostics, MCB tripping resolution, ceiling fan mounting, chandelier installations, and inverter backup checkups.",
      visits: "1 plan visit",
      mobileTier: "Essential & Up",
    },
    {
      id: "appliances",
      name: "Appliance Services",
      mobileName: "Appliance Care",
      icon: "kitchen",
      iconBg: "bg-primary-container/40",
      iconColor: "text-primary",
      badge: "Comprehensive Tier",
      badgeClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
      desc: "Split/Window AC foam-jet cleaning and gas pressure checks, washing machine motor recalibration, and double-door refrigerator cooling tune-ups.",
      visits: "1–2 plan visits",
      mobileTier: "Comprehensive Tier",
    },
    {
      id: "maintenance",
      name: "Home Maintenance",
      mobileName: "Home Maintenance",
      icon: "handyman",
      iconBg: "bg-tertiary-fixed/60",
      iconColor: "text-tertiary",
      badge: "Estate Tier",
      badgeClass: "bg-surface-container-high text-on-surface-variant",
      desc: "Door alignment, latch repairs, wall frame drilling, wardrobe hinge re-tensioning, curtain rod fixes, and minor dry-wall restoration.",
      visits: "1 plan visit",
      mobileTier: "Estate Tier",
    },
  ];

    return (
            <section id="services" className="w-full py-8 lg:py-space-xl">
              <div className="max-w-[1280px] mx-auto px-4 lg:px-gutter">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-6 lg:mb-space-xl">
                  <div className="max-w-2xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold mb-1.5 lg:mb-2 block">
                      Curated Trades
                    </span>
                    <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
                      Home Services Made Simpler
                    </h2>
                    <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
                      Configurable services covered under your subscription visits. Delivered by verified specialists across metropolitan Indian hubs.
                    </p>
                  </div>
                  <Link
                    href="/services/"
                    className="hidden md:inline-flex items-center gap-1.5 font-label-md text-label-md text-primary bg-surface-container-low hover:bg-surface-container px-space-md py-space-sm rounded-lg transition-colors shrink-0"
                  >
                    <span>View All Services</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>

                          {/* ========================================================================= */}
                          {/* MOBILE GRID (2-Column Touch Friendly)                                    */}
                          {/* ========================================================================= */}
                          <div className="grid grid-cols-2 gap-3 lg:hidden pt-1">
                            {services.map((svc) => (
            <div
              key={svc.id}
              className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-lowest shadow-sm h-full"
            >
              <div className="flex flex-col space-y-2.5">
                <div
                  className={`w-9 h-9 rounded-lg ${svc.iconBg} flex items-center justify-center ${svc.iconColor}`}
                >
                  <span className="material-symbols-outlined text-[20px]">{svc.icon}</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-label-lg text-label-lg font-bold text-on-surface leading-snug">
                    {svc.mobileName}
                  </h3>
                  <span className="font-label-sm text-[11px] text-secondary font-semibold">
                    {svc.mobileTier}
                  </span>
                </div>
              </div>
              <div className="pt-3 mt-auto flex items-center justify-between text-outline">
                <span className="font-label-sm text-[11px] text-on-surface-variant">
                  {svc.visits}
                </span>
                <span className="material-symbols-outlined text-[18px] text-primary">
                  add_circle
                </span>
              </div>
            </div>
          ))}

                          {/* 6th Mobile Card: Multi-Skill Kit */}
                          <div className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-high shadow-sm h-full">
                            <div className="flex flex-col space-y-2.5">
                              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-surface">
                                <span className="material-symbols-outlined text-[20px]">
                                  precision_manufacturing
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <h3 className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">
                                  Multi-skill Kit
                                </h3>
                                <span className="font-label-sm text-[11px] text-secondary font-semibold mt-1">
                                  100% Tool Integrity
                                </span>
                              </div>
                            </div>
                            <div className="pt-3 mt-auto flex items-center justify-between text-outline">
                              <span className="font-label-sm text-[10px] text-on-surface-variant">
                                Inspected Kits
                              </span>
                              <span className="material-symbols-outlined text-[18px] text-secondary">
                                verified
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Mobile View All Button */}
                        <Link
                          href="/services/"
                          className="lg:hidden w-full h-11 mt-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-surface-container-high transition-colors"
                        >
                          <span>View All Services</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>

                        {/* ========================================================================= */}
                        {/* DESKTOP GRID (3-Column Rich Cards)                                       */}
                        {/* ========================================================================= */}
                        <div className="hidden lg:grid grid-cols-3 gap-gutter mb-space-lg">
                          {services.map((svc) => (
                            <div
                              key={svc.id}
                              className="group bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_1px_3px_rgba(32,41,35,0.04)] hover:shadow-[0_4px_6px_-1px_rgba(32,41,35,0.05),0_12px_24px_-6px_rgba(32,41,35,0.06)] transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-space-md">
                                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">{svc.icon}</span>
                                  </div>
                                  <span className={`font-label-sm text-label-sm px-2.5 py-1 rounded-full font-medium ${svc.badgeClass}`}>
                                    {svc.badge}
                                  </span>
                                </div>
                                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                                  {svc.name}
                                </h3>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                                  {svc.desc}
                                </p>
                              </div>
                              <div className="pt-space-sm flex items-center justify-between border-t border-outline-variant/30">
                                <span className="font-body-sm text-body-sm text-secondary font-medium">
                                  Takes {svc.visits}
                                </span>
                                <Link
                                  href="/services/"
                                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform font-semibold"
                                >
                                  View Details <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                                </Link>
                              </div>
                            </div>
                          ))}

                          {/* 6th Desktop Card: Dynamic Allocation */}
                          <div className="bg-surface-container p-space-lg rounded-xl flex flex-col justify-between">
                            <div>
                              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary mb-space-md shadow-sm">
                                <span className="material-symbols-outlined text-[24px]">tune</span>
                              </div>
                              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">
                                Dynamic Allocation
                              </h3>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                                Need multi-skilled support? Servixo lets you schedule multi-point services during single scheduled visits or spread them across seasons.
                              </p>
                            </div>
                            <div className="p-3 bg-surface-container-lowest rounded-lg shadow-xs">
                              <span className="font-label-sm text-label-sm text-primary flex items-center gap-1.5 font-medium">
                                <span className="material-symbols-outlined text-[16px] text-secondary">
                                  verified_user
                                </span>
                                100% Guaranteed Tool &amp; Part Integrity
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Compliance Notice Banner */}
                        <div className="mt-4 p-space-md bg-surface-container-high rounded-xl flex items-center gap-space-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                            admin_panel_settings
                          </span>
                          <p className="font-body-sm text-body-sm">
                            <strong>Administrative Notice:</strong> All services are administered strictly based on admin-configured plan eligibility. Service pricing is modular and transparent without hidden charges.
                          </p>
                        </div>
                      </div>
                    </section>
                  );
}
