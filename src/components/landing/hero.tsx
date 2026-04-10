import { config } from "@/lib/config";
import { ArrowRight, Star, CheckCircle2, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A] hero-noise">
      {/* Background elements */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#2563EB] opacity-10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#22C55E] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column — copy */}
          <div>
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 stat-pill text-white/80 text-sm px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              {config.hero.socialProof}
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-6xl leading-[1.08] tracking-tight">
              <span className="hero-gradient-text">
                {config.hero.headline}
              </span>
            </h1>

            <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
              {config.hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={config.hero.cta.href}
                className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-[#16a34a] transition-all duration-200 cta-glow group"
              >
                {config.hero.cta.text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={config.hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                {config.hero.secondaryCta.text}
              </a>
            </div>

            {/* Micro-trust */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8">
              <span className="flex items-center gap-1.5 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                14-day free trial
              </span>
              <span className="flex items-center gap-1.5 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Right column — visual dashboard mockup */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating rating badge */}
              <div className="absolute -top-6 -left-6 z-10 bg-white rounded-2xl shadow-xl shadow-black/20 px-4 py-3 flex items-center gap-3">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" fill="#facc15" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">{config.hero.rating}</p>
                  <p className="text-xs text-gray-400">from freelancers</p>
                </div>
              </div>

              {/* Floating stat badge */}
              <div className="absolute -bottom-4 -right-4 z-10 bg-[#2563EB] rounded-2xl shadow-xl shadow-blue-900/40 px-4 py-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-white/80" />
                  <div>
                    <p className="text-xs font-bold text-white">70% fewer</p>
                    <p className="text-xs text-white/70">late payments</p>
                  </div>
                </div>
              </div>

              {/* Main dashboard card */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Mini header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Invoice Dashboard</p>
                    <p className="text-white font-semibold mt-0.5">November 2025</p>
                  </div>
                  <div className="bg-[#22C55E]/20 text-[#22C55E] text-xs font-semibold px-3 py-1 rounded-full">
                    +23% vs last month
                  </div>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Paid", value: "$12,400", color: "#22C55E" },
                    { label: "Pending", value: "$3,200", color: "#f59e0b" },
                    { label: "Overdue", value: "$450", color: "#ef4444" },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                      <div className="w-2 h-2 rounded-full mb-2" style={{ background: stat.color }} />
                      <p className="text-white font-bold text-base">{stat.value}</p>
                      <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Invoice list */}
                <div className="space-y-2">
                  <p className="text-white/30 text-xs uppercase tracking-wider mb-3">Recent Invoices</p>
                  {[
                    { client: "Acme Corp", amount: "$4,500", status: "Paid", statusColor: "#22C55E", statusBg: "rgba(34,197,94,0.15)" },
                    { client: "Studio Lab", amount: "$2,200", status: "Sent", statusColor: "#60a5fa", statusBg: "rgba(96,165,250,0.15)" },
                    { client: "Nova Media", amount: "$1,800", status: "Draft", statusColor: "#a1a1aa", statusBg: "rgba(161,161,170,0.15)" },
                    { client: "Peak Design", amount: "$3,900", status: "Paid", statusColor: "#22C55E", statusBg: "rgba(34,197,94,0.15)" },
                  ].map((inv, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#2563EB]/30 flex items-center justify-center text-white/60 text-xs font-bold">
                          {inv.client[0]}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{inv.client}</p>
                          <p className="text-white/30 text-xs">INV-{2025 + i}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-white font-semibold text-sm">{inv.amount}</p>
                        <span
                          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ color: inv.statusColor, background: inv.statusBg }}
                        >
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

        {/* Bottom logo strip */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm text-center mb-6">
            Trusted by freelancers at companies like
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["Toptal", "Upwork", "Fiverr", "Contra", "Dribbble", "99designs"].map(name => (
              <span key={name} className="text-white font-semibold text-sm tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
