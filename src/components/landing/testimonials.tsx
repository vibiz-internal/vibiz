import { config } from "@/lib/config";
import { Quote } from "lucide-react";

const avatarColors = [
  "bg-[#2563EB]",
  "bg-[#7c3aed]",
  "bg-[#0891b2]",
  "bg-[#dc2626]",
  "bg-[#d97706]",
  "bg-[#059669]",
];

export function Testimonials() {
  const testimonials = config.testimonials as Array<{
    quote: string;
    name: string;
    role: string;
    avatar?: string;
  }>;

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="accent-line block mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0F172A] tracking-tight">
            Freelancers who made the switch
          </h2>
          <p className="text-gray-500 mt-4">
            Real stories from real freelancers — designers, developers, writers, and consultants.
          </p>
        </div>

        {/* Testimonial masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testimonial-card break-inside-avoid bg-white rounded-xl border border-gray-100 p-6 mb-6 shadow-sm"
            >
              {/* Quote icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-6 h-6 text-[#2563EB] opacity-60" />
                <div className="flex gap-0.5">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j} className="text-yellow-400 text-sm">{s}</span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                  {t.avatar ?? t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0F172A]">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stat bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "10,000+", label: "Freelancers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "$2M+", label: "Invoiced Monthly" },
            { value: "70%", label: "Fewer Late Payments" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white rounded-xl border border-gray-100 py-6 px-4 shadow-sm"
            >
              <p className="font-heading font-bold text-3xl text-[#0F172A]">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
