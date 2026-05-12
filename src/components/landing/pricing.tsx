import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface-card rounded-[2.75rem] p-6 sm:p-10 lg:p-12">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {config.pricing.headline}
            </h2>
            <p className="mt-4 text-base text-white/52 sm:text-lg">{config.pricing.subheadline}</p>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
            {config.pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-[2.2rem] p-7 transition-all sm:p-8 ${
                  tier.highlighted
                    ? "pricing-highlight bg-[#080808] text-white"
                    : "surface-card text-white"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black shadow-[0_16px_40px_rgba(249,115,22,0.24)]">
                      <Zap className="h-3 w-3" fill="currentColor" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${tier.highlighted ? "text-brand-primary" : "text-white/42"}`}>
                    {tier.name}
                  </p>
                  <p className="text-sm leading-relaxed text-white/52">
                    {tier.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="font-heading text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="mb-2 text-sm text-white/38">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  {tier.highlighted && (
                    <p className="mt-2 text-xs text-white/38">Billed monthly. Annual saves 20%.</p>
                  )}
                </div>

                <Button
                  href={tier.cta.href}
                  variant={tier.highlighted ? "primary" : "secondary"}
                  className={`mb-8 w-full ${tier.highlighted ? "cta-glow" : ""}`}
                >
                  {tier.cta.text}
                </Button>

                <div className="mb-6 border-t border-white/8" />

                <ul className="flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.highlighted ? "text-brand-primary" : "text-white/60"}`} />
                      <span className="text-white/68">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/36">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
