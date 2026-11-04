"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How does Servixo work?",
    answer: "Sign up, choose a service or plan, book a visit, and our verified professional will arrive at your scheduled time.",
  },
  {
    question: "Are your professionals verified?",
    answer: "Yes. Every professional on Servixo undergoes identity verification, background checks, and skill assessment before being approved.",
  },
  {
    question: "What areas do you serve?",
    answer: "We are currently expanding across major cities. Enter your PIN code on the homepage to check availability in your area.",
  },
  {
    question: "How do subscription plans work?",
    answer: "Subscribe to a plan and get a set number of service visits per month at discounted rates. Unused visits do not carry over.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods through Razorpay — credit/debit cards, UPI, net banking, and wallets.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">Got questions? We have answers.</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border bg-card">
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
