import { config } from "@/lib/config";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2563EB] opacity-10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#22C55E] opacity-5 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 stat-pill text-white/70 text-sm px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          {config.hero.socialProof}
        </div>

        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight">
          Your work is worth getting paid for.
          <br />
          <span className="text-[#22C55E]">Vibiz makes sure you are.</span>
        </h2>

        <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          Stop leaving money on the table. Join thousands of freelancers who invoice faster and get paid sooner with Vibiz.
        </p>

        {/* CTA button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-bold text-lg px-10 py-5 rounded-xl hover:bg-[#16a34a] transition-all duration-200 cta-glow group"
          >
            {config.hero.cta.text}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Micro-trust row */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-8">
          {[
            "No credit card required",
            "14-day free trial",
            "Cancel anytime",
            "Setup in under 5 minutes",
          ].map(item => (
            <span key={item} className="flex items-center gap-1.5 text-white/40 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
