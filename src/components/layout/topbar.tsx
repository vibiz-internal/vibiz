import { config } from "@/lib/config";

export function Topbar() {
  return (
    <header className="border-b border-white/8 bg-black/80 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-white/34">Dashboard</h2>
          <p className="mt-1 text-sm text-white/54">Manage your account and billing from one calm workspace.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55">{config.product.name}</span>
          <a href="/api/auth/signout" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/55 hover:bg-white/[0.08] hover:text-white">Sign out</a>
        </div>
      </div>
    </header>
  );
}
