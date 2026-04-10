"use client";
import { config } from "@/lib/config";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="accent-line block mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 mt-4">
            Still not sure? Here are the questions we get most often.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {config.faq.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-[#2563EB]/30 bg-white shadow-md shadow-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className={`font-semibold text-sm md:text-base pr-4 ${open === i ? "text-[#2563EB]" : "text-[#0F172A]"}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  open === i ? "bg-[#2563EB] text-white" : "bg-gray-100 text-gray-500"
                }`}>
                  {open === i
                    ? <Minus className="w-3.5 h-3.5" />
                    : <Plus className="w-3.5 h-3.5" />
                  }
                </div>
              </button>

              {open === i && (
                <div className="faq-answer px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact nudge */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@vibiz.io" className="text-[#2563EB] font-semibold hover:underline">
              We&apos;re happy to help →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
