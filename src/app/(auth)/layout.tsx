import { config } from "@/lib/config";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-6 sm:px-6">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-primary/18 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/6 blur-[120px]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-8 text-center">
          <a href="/" className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-black">V</span>
            <span className="text-left">
              <span className="block font-heading text-lg font-semibold text-white">{config.product.name}</span>
              <span className="block text-xs text-white/45">Account access</span>
            </span>
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}
