"use client";

import { config } from "@/lib/config";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="surface-card rounded-[2.75rem] p-6 sm:p-10 lg:p-12">
          <div className="mb-14 text-center">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-white/52">
              Still not sure? Here are the questions we get most often.
            </p>
          </div>

          <div className="space-y-3">
            {config.faq.map((item, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-[1.85rem] border transition-all duration-200 ${
                  open === i
                    ? "border-brand-primary/35 bg-white/[0.06] shadow-[0_24px_72px_rgba(0,0,0,0.35)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/14"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`pr-4 text-sm font-semibold md:text-base ${open === i ? "text-white" : "text-white/76"}`}>
                    {item.question}
                  </span>
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                    open === i ? "bg-brand-primary text-black" : "bg-white/[0.06] text-white/56"
                  }`}>
                    {open === i
                      ? <Minus className="h-4 w-4" />
                      : <Plus className="h-4 w-4" />
                    }
                  </div>
                </button>

                {open === i && (
                  <div className="faq-answer border-t border-white/6 px-6 pb-5 pt-4 text-sm leading-relaxed text-white/55">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-white/45">
              Still have questions?{" "}
              <a href="mailto:hello@vibiz.io" className="font-semibold text-brand-primary hover:text-[#fb923c]">
                We&apos;re happy to help →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
