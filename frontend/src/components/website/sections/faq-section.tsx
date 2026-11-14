"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";

export function FaqSection() {
  const { faqs } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full py-8 lg:py-space-xl bg-surface">
      <div className="max-w-[960px] mx-auto px-4 lg:px-gutter">
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold mb-1.5 lg:mb-2 block">
            {faqs.subtitle}
          </span>
          <h2 className="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-on-surface font-bold tracking-tight mb-2">
            {faqs.title}
          </h2>
          <p className="font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed">
            {faqs.description}
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {faqs.items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 lg:p-5 text-left flex items-center justify-between gap-4 font-label-lg text-label-lg font-bold text-on-surface hover:text-primary transition-colors"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[20px] text-primary transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 lg:px-5 lg:pb-5 pt-0 font-body-sm lg:font-body-md text-body-sm lg:text-body-md text-on-surface-variant leading-relaxed border-t border-outline-variant/20">
                    <p className="mt-3">{faq.answer}</p>
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
