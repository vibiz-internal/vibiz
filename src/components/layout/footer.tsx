"use client";
import { config } from "@/lib/config";
import { authEnabled } from "@/lib/auth-client";
import { Zap, Twitter, Github, Linkedin } from "lucide-react";

const authPaths = ["/login", "/signup", "/dashboard"];

export function Footer() {
  const links = authEnabled
    ? config.footer.links
    : config.footer.links.filter((l) => !authPaths.includes(l.href));

  return (
    <footer className="bg-[#0F172A] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                {config.product.name}
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {config.product.tagline}
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "FAQ", "Changelog"].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h4 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-4">Account</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {["Privacy Policy", "Terms of Service"].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-sm">{config.footer.copyright}</p>
        {config.footer.builtWith && (
          <p className="text-white/20 text-xs">{config.footer.builtWith}</p>
        )}
      </div>
    </footer>
  );
}
