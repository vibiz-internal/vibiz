import { config } from "@/lib/config";
import { Check, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="accent-line block mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            {config.pricing.headline}
          </h2>
          <p className="text-gray-500 mt-4 text-lg">{config.pricing.subheadline}</p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {config.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                tier.highlighted
                  ? "bg-[#0F172A] text-white pricing-highlight"
                  : "bg-white border border-gray-200 text-[#0F172A] hover:shadow-lg transition-shadow"
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-[#22C55E] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-green-900/30">
                    <Zap className="w-3 h-3" fill="white" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name & desc */}
              <div className="mb-6">
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${tier.highlighted ? "text-[#22C55E]" : "text-[#2563EB]"}`}>
                  {tier.name}
                </p>
                <p className={`text-sm leading-relaxed ${tier.highlighted ? "text-white/60" : "text-gray-500"}`}>
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className={`font-heading font-bold text-5xl ${tier.highlighted ? "text-white" : "text-[#0F172A]"}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm mb-2 ${tier.highlighted ? "text-white/40" : "text-gray-400"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                {tier.highlighted && (
                  <p className="text-white/40 text-xs mt-1">Billed monthly. Annual saves 20%.</p>
                )}
              </div>

              {/* CTA */}
              <a
                href={tier.cta.href}
                className={`w-full inline-flex items-center justify-center font-semibold text-sm px-6 py-3.5 rounded-xl transition-all mb-8 ${
                  tier.highlighted
                    ? "bg-[#22C55E] text-white hover:bg-[#16a34a] cta-glow"
                    : "border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                }`}
              >
                {tier.cta.text}
              </a>

              {/* Divider */}
              <div className={`border-t mb-6 ${tier.highlighted ? "border-white/10" : "border-gray-100"}`} />

              {/* Features list */}
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-[#22C55E]" : "text-[#2563EB]"}`}
                    />
                    <span className={tier.highlighted ? "text-white/80" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-10">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
