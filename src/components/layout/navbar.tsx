"use client";
import { config } from "@/lib/config";
import { authEnabled } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/98 shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors">
            <Zap className="w-4 h-4 text-white" fill="white" />
          </div>
          <span className="font-heading font-bold text-lg text-white tracking-tight">
            {config.product.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
            FAQ
          </a>
          {authEnabled && (
            <>
              <a href="/login" className="text-white/70 hover:text-white text-sm font-medium transition-colors">
                Log in
              </a>
              <a
                href="/signup"
                className="inline-flex items-center gap-1.5 bg-[#22C55E] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#16a34a] transition-all cta-glow"
              >
                {config.hero.cta.text}
              </a>
            </>
          )}
          {!authEnabled && (
            <a
              href={config.hero.cta.href}
              className="inline-flex items-center gap-1.5 bg-[#22C55E] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#16a34a] transition-all cta-glow"
            >
              {config.hero.cta.text}
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10 px-6 py-4 space-y-4">
          <a href="#features" className="block text-white/70 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#pricing" className="block text-white/70 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#faq" className="block text-white/70 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>FAQ</a>
          {authEnabled && (
            <a href="/login" className="block text-white/70 hover:text-white text-sm py-2" onClick={() => setMobileOpen(false)}>Log in</a>
          )}
          <a
            href="/signup"
            className="block w-full text-center bg-[#22C55E] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#16a34a] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {config.hero.cta.text}
          </a>
        </div>
      )}
    </nav>
  );
}
