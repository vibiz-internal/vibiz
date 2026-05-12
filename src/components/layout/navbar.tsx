"use client";

import { config } from "@/lib/config";
import { authEnabled } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryHref = authEnabled ? "/signup" : config.hero.cta.href;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-[2rem] border border-white/10 px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-black/85 shadow-[0_24px_72px_rgba(0,0,0,0.5)]"
            : "bg-black/50"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-black shadow-[0_12px_28px_rgba(249,115,22,0.28)]">
              <Zap className="h-5 w-5" fill="currentColor" />
            </div>
            <span className="font-heading text-lg font-semibold tracking-tight text-white">
              {config.product.name}
            </span>
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#features" className="rounded-full px-4 py-2 text-sm font-medium text-white/65 hover:bg-white/[0.06] hover:text-white">
              Features
            </a>
            <a href="#pricing" className="rounded-full px-4 py-2 text-sm font-medium text-white/65 hover:bg-white/[0.06] hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="rounded-full px-4 py-2 text-sm font-medium text-white/65 hover:bg-white/[0.06] hover:text-white">
              FAQ
            </a>
            {authEnabled && (
              <a href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-white/65 hover:bg-white/[0.06] hover:text-white">
                Log in
              </a>
            )}
            <Button href={primaryHref} size="sm" className="cta-glow">
              {config.hero.cta.text}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 hover:bg-white/[0.08] hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/10 bg-[#080808]/95 p-4 shadow-[0_24px_72px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            <a href="#features" className="block rounded-[1.25rem] px-4 py-3 text-sm font-medium text-white/72 hover:bg-white/[0.06] hover:text-white" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#pricing" className="block rounded-[1.25rem] px-4 py-3 text-sm font-medium text-white/72 hover:bg-white/[0.06] hover:text-white" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="#faq" className="block rounded-[1.25rem] px-4 py-3 text-sm font-medium text-white/72 hover:bg-white/[0.06] hover:text-white" onClick={() => setMobileOpen(false)}>FAQ</a>
            {authEnabled && (
              <a href="/login" className="block rounded-[1.25rem] px-4 py-3 text-sm font-medium text-white/72 hover:bg-white/[0.06] hover:text-white" onClick={() => setMobileOpen(false)}>Log in</a>
            )}
          </div>
          <Button href={primaryHref} className="mt-4 w-full cta-glow" onClick={() => setMobileOpen(false)}>
            {config.hero.cta.text}
          </Button>
        </div>
      )}
    </nav>
  );
}
