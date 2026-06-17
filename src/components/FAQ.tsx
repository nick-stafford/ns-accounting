"use client";

import { useState } from "react";
import { site } from "@/config/site";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-y border-hair bg-paper-2/50">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" align="center" />

        <div className="mt-12 divide-y divide-hair overflow-hidden rounded-3xl border border-hair bg-card shadow-sm">
          {site.faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ink/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-ink transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-gold bg-gold text-ink" : "border-ink/20"
                    }`}
                    aria-hidden
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-stone">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
