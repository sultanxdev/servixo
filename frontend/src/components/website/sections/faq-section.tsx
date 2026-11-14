"use client";

import { useState } from "react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Servixo?",
      a: "Servixo is India's dedicated home services subscription platform. Rather than paying volatile, unpredictable rates for isolated repairs, homeowners purchase structured subscription packages that include dedicated visits from vetted, certified service technicians for cleaning, plumbing, electrical, and appliance care.",
    },
    {
      q: "How do premium plans work?",
      a: "Each premium plan comes with a set validity period (e.g. 6 or 12 months) and a quota of prepaid service visits. Once you activate a plan, you can book any eligible service covered under that plan at zero additional labor charge until your included visits are consumed.",
    },
    {
      q: "How can I check service availability?",
      a: "You can enter your 6-digit postal PIN code into our availability checker at the top of the homepage or in the header. Our system checks whether technicians and required trade supplies are operational in your locality and displays available service categories immediately.",
    },
    {
      q: "How are service visits calculated and deducted?",
      a: "A standard service booking typically deducts exactly one (1) visit from your active plan balance upon technician completion. Certain high-intensity services (like complete deep sanitization of an entire multi-bedroom villa or multi-split AC overhauls) may consume two visits, which is clearly shown prior to confirming the booking.",
    },
    {
      q: "How do I book a service?",
      a: "Log in to your Servixo customer account, navigate to 'Services', select your needed category, choose your registered home address, and pick an open date and time slot. Our scheduling system automatically reserves your booking and assigns an approved specialist.",
    },
    {
      q: "Can I track my remaining visits?",
      a: "Yes! Your personal Customer Subscription Portal provides a real-time ledger detailing your total purchased visits, completed visits with service history dates, scheduled upcoming visits, and currently remaining balance.",
    },
    {
      q: "How do professionals join Servixo?",
      a: "Technicians apply through the 'Become a Professional' onboarding portal. Applicants must provide government identification, pass local police verification, submit trade qualifications or experience records, and complete an in-person diagnostic skill audit with Servixo technical leads.",
    },
    {
      q: "How are professionals assigned to bookings?",
      a: "Our dispatch engine dynamically pairs your requested trade category and chosen time slot with verified specialists mapped to your exact PIN code area, optimizing arrival time and guaranteeing trade expertise for your specific task.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full py-8 lg:py-space-xl">
      <div className="max-w-[960px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            Clear Answers
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            Everything you need to know about our subscription model, visit allocation, and service professionals.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-2.5 lg:gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl shadow-xs border border-outline-variant/30 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 lg:p-space-md text-left flex items-center justify-between gap-4 font-headline-sm text-[16px] lg:text-headline-sm font-bold text-on-surface hover:text-primary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 lg:px-space-md pb-4 lg:pb-space-md font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed animate-in fade-in duration-150 border-t border-outline-variant/20 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
