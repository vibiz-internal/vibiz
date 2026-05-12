import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

const invoiceRows = [
  { client: "Acme Corp", amount: "$4,500", status: "Paid" },
  { client: "Studio Lab", amount: "$2,200", status: "Sent" },
  { client: "Peak Design", amount: "$3,900", status: "Due today" },
];

export function Hero() {
  return (
    <section className="hero-noise relative overflow-hidden bg-black pt-28 sm:pt-32">
      <div className="absolute inset-0 dot-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-primary/18 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="stat-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/78">
              <span className="h-2 w-2 rounded-full bg-brand-primary" />
              {config.hero.socialProof}
            </div>

            <h1 className="mt-8 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              <span className="hero-gradient-text">{config.hero.headline}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/58 sm:text-lg">
              {config.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={config.hero.cta.href} size="lg" className="cta-glow group w-full sm:w-auto">
                {config.hero.cta.text}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href={config.hero.secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {config.hero.secondaryCta.text}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white/52 sm:grid-cols-3 sm:gap-4">
              <span className="surface-chip flex items-center gap-2 rounded-full px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                No credit card required
              </span>
              <span className="surface-chip flex items-center gap-2 rounded-full px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                14-day free trial
              </span>
              <span className="surface-chip flex items-center gap-2 rounded-full px-4 py-3">
                <CheckCircle2 className="h-4 w-4 text-brand-primary" />
                Cancel anytime
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="surface-card rounded-[2.75rem] p-4 sm:p-5">
              <div className="surface-card rounded-[2.25rem] bg-[#0d0d0d] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/35">Collections due today</p>
                    <p className="mt-2 text-sm text-white/52">Invoice performance</p>
                  </div>
                  <span className="rounded-full bg-brand-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                    Live
                  </span>
                </div>

                <div className="mt-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">$12.4k</p>
                    <p className="mt-2 text-sm text-white/52">Ready to collect this month</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary text-black shadow-[0_16px_40px_rgba(249,115,22,0.28)]">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  { label: "Paid", value: "$8.2k" },
                  { label: "Pending", value: "$3.2k" },
                ].map((stat) => (
                  <div key={stat.label} className="surface-card rounded-[1.75rem] p-5">
                    <p className="text-sm text-white/45">{stat.label}</p>
                    <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 surface-card rounded-[2rem] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/35">Recent invoices</p>
                  <div className="flex items-center gap-2 text-sm text-brand-primary">
                    <TrendingUp className="h-4 w-4" />
                    70% fewer late payments
                  </div>
                </div>

                <div className="space-y-3">
                  {invoiceRows.map((inv, i) => (
                    <div key={inv.client} className="flex items-center justify-between rounded-[1.5rem] bg-white/[0.04] px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-sm font-semibold text-white/70">
                          {inv.client[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">{inv.client}</p>
                          <p className="text-xs text-white/35">INV-{2025 + i}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-semibold text-white">{inv.amount}</p>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${inv.status === "Paid" ? "bg-white text-black" : inv.status === "Due today" ? "bg-brand-primary text-black" : "bg-white/10 text-white/70"}`}>
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/8 pt-8 sm:mt-20">
          <p className="mb-6 text-center text-sm text-white/30">
            Trusted by freelancers at companies like
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-center opacity-50 sm:gap-8">
            {["Toptal", "Upwork", "Fiverr", "Contra", "Dribbble", "99designs"].map((name) => (
              <span key={name} className="text-sm font-semibold tracking-[0.18em] text-white/60">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
