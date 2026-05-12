import { config } from "@/lib/config";
import { Quote } from "lucide-react";

const avatarColors = [
  "bg-[#f97316]",
  "bg-[#fb923c]",
  "bg-[#9ca3af]",
  "bg-[#525252]",
  "bg-[#7c2d12]",
  "bg-[#ea580c]",
];

export function Testimonials() {
  const testimonials = config.testimonials;

  return (
    <section className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface-card rounded-[2.75rem] p-6 sm:p-10 lg:p-12">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <span className="accent-line mx-auto mb-6 block" />
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Freelancers who made the switch
            </h2>
            <p className="mt-4 text-white/52">
              Real stories from real freelancers — designers, developers, writers, and consultants.
            </p>
          </div>

          <div className="columns-1 gap-6 space-y-0 md:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="testimonial-card surface-card mb-6 break-inside-avoid rounded-[2rem] p-6"
              >
                <div className="mb-5 flex items-start justify-between">
                  <Quote className="h-6 w-6 text-brand-primary opacity-80" />
                  <div className="flex gap-0.5 text-sm text-brand-primary">
                    {"★★★★★".split("").map((s, j) => (
                      <span key={j}>{s}</span>
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-white/72">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-white/6 pt-5">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${avatarColors[i % avatarColors.length]} text-xs font-bold text-white`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/38">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { value: "10,000+", label: "Freelancers" },
              { value: "4.9/5", label: "Average Rating" },
              { value: "$2M+", label: "Invoiced Monthly" },
              { value: "70%", label: "Fewer Late Payments" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="surface-card rounded-[1.75rem] px-4 py-6 text-center"
              >
                <p className="font-heading text-3xl font-semibold tracking-[-0.03em] text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
