import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-brand-primary/12 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <div className="surface-card rounded-[2.75rem] px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="stat-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/72">
            <span className="h-2 w-2 rounded-full bg-brand-primary" />
            {config.hero.socialProof}
          </div>

          <h2 className="mt-8 font-heading text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Your work is worth getting paid for.
            <br />
            <span className="text-brand-primary">Vibiz makes sure you are.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/54 sm:text-lg">
            Stop leaving money on the table. Join thousands of freelancers who invoice faster and get paid sooner with Vibiz.
          </p>

          <div className="mt-10 flex justify-center">
            <Button href="/signup" size="lg" className="cta-glow group w-full sm:w-auto">
              {config.hero.cta.text}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
              "Setup in under 5 minutes",
            ].map((item) => (
              <span key={item} className="surface-chip flex items-center gap-2 rounded-full px-4 py-3 text-sm text-white/48">
                <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
