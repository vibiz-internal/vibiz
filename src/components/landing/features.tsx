import { config } from "@/lib/config";
import {
  Zap, Globe, BarChart3, Bell, FileText, Shield,
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
  { bg: "bg-[#2563EB]/10", text: "text-[#2563EB]", border: "group-hover:border-[#2563EB]/40" },
  { bg: "bg-[#22C55E]/10", text: "text-[#22C55E]", border: "group-hover:border-[#22C55E]/40" },
  { bg: "bg-[#2563EB]/10", text: "text-[#2563EB]", border: "group-hover:border-[#2563EB]/40" },
  { bg: "bg-[#22C55E]/10", text: "text-[#22C55E]", border: "group-hover:border-[#22C55E]/40" },
  { bg: "bg-[#2563EB]/10", text: "text-[#2563EB]", border: "group-hover:border-[#2563EB]/40" },
  { bg: "bg-[#22C55E]/10", text: "text-[#22C55E]", border: "group-hover:border-[#22C55E]/40" },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="accent-line block mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            Everything a freelancer needs to get paid — and nothing they don&apos;t
          </h2>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            Vibiz strips away the complexity of traditional invoicing tools and leaves only what matters: speed, clarity, and cash in your account.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {config.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] ?? Zap;
            const colors = accentColors[i % accentColors.length];
            return (
              <div
                key={feature.title}
                className={`group feature-card bg-white rounded-xl border border-gray-100 p-6 cursor-default ${colors.border} transition-all`}
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="font-heading font-semibold text-[#0F172A] text-lg leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 mt-2.5 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-[#0F172A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-white text-xl">
              Ready to stop chasing invoices?
            </h3>
            <p className="text-white/50 mt-1 text-sm">
              Join 10,000+ freelancers who invoice smarter with Vibiz.
            </p>
          </div>
          <a
            href="/signup"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-[#16a34a] transition-all cta-glow text-sm whitespace-nowrap"
          >
            Try Vibiz Free
          </a>
        </div>
      </div>
    </section>
  );
}
