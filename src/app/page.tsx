import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";

export default function LandingPage() {
  return (
    <div className="bg-[#0F172A]">
      <Navbar />
      <main>
        {/* Hero — dark, bold */}
        <Hero />
        {/* Features — white bg */}
        <Features />
        {/* Testimonials — light gray bg */}
        <Testimonials />
        {/* Pricing — white bg */}
        <Pricing />
        {/* FAQ — light gray bg */}
        <FAQ />
        {/* Final CTA — dark */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
