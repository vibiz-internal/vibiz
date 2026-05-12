import { config } from "@/lib/config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Zap,
  Globe,
  BarChart3,
  Bell,
  FileText,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Globe,
  BarChart3,
  Bell,
  FileText,
  Shield,
};

const accentColors = [
  { bg: "bg-brand-primary/16", text: "text-brand-primary", border: "group-hover:border-brand-primary/30" },
  { bg: "bg-white/10", text: "text-white", border: "group-hover:border-white/20" },
  { bg: "bg-brand-primary/16", text: "text-brand-primary", border: "group-hover:border-brand-primary/30" },
  { bg: "bg-white/10", text: "text-white", border: "group-hover:border-white/20" },
  { bg: "bg-brand-primary/16", text: "text-brand-primary", border: "group-hover:border-brand-primary/30" },
  { bg: "bg-white/10", text: "text-white", border: "group-hover:border-white/20" },
];

export function Features() {
  return (
    <section id="features" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface-card rounded-[2.75rem] p-6 sm:p-10 lg:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything a freelancer needs to get paid — and nothing they don&apos;t
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/52 sm:text-lg">
              Vibiz strips away the complexity of traditional invoicing tools and leaves only what matters: speed, clarity, and cash in your account.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.features.map((feature, i) => {
              const Icon = iconMap[feature.icon] ?? Zap;
              const colors = accentColors[i % accentColors.length];
              return (
                <div
                  key={feature.title}
                  className={`group feature-card surface-card cursor-default rounded-[2rem] p-6 sm:p-7 ${colors.border}`}
                >
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-[1.4rem] ${colors.bg}`}>
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/52">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col gap-6 rounded-[2.25rem] border border-white/10 bg-[#060606] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-white">
                Ready to stop chasing invoices?
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Join 10,000+ freelancers who invoice smarter with Vibiz.
              </p>
            </div>
            <Button href="/signup" className="cta-glow whitespace-nowrap" size="md">
              Try Vibiz Free
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
