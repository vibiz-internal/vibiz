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
    <footer className="bg-black">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-4 sm:px-6">
        <div className="surface-card rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="/" className="mb-5 flex w-fit items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-black shadow-[0_12px_28px_rgba(249,115,22,0.28)]">
                  <Zap className="h-5 w-5" fill="currentColor" />
                </div>
                <span className="font-heading text-xl font-semibold tracking-tight text-white">
                  {config.product.name}
                </span>
              </a>
              <p className="max-w-sm text-sm leading-relaxed text-white/46">
                {config.product.tagline}
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Github, label: "GitHub" },
                  { Icon: Linkedin, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/45 hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/36">Product</h4>
              <ul className="space-y-3">
                {["Features", "Pricing", "FAQ", "Changelog"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-white/52 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/36">Account</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-white/52 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/52 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-2 px-2 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/28">{config.footer.copyright}</p>
          {config.footer.builtWith && (
            <p className="text-xs text-white/20">{config.footer.builtWith}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
