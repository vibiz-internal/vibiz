"use client";

import { config } from "@/lib/config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const iconMap = Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>;

  return (
    <aside className="border-b border-white/8 bg-[#050505] px-4 py-4 md:min-h-screen md:w-72 md:border-b-0 md:border-r md:px-5 md:py-6">
      <div className="flex items-center gap-3 px-2 py-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-black">V</span>
        <div>
          <span className="font-heading text-lg font-semibold text-white">{config.product.name}</span>
          <p className="text-xs text-white/34">Workspace</p>
        </div>
      </div>
      <nav className="mt-5 flex gap-3 overflow-x-auto pb-1 md:flex-col md:gap-2 md:overflow-visible">
        {config.dashboard.sidebarItems.map((item) => {
          const Icon = iconMap[
            item.icon.charAt(0).toUpperCase() + item.icon.slice(1).replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
          ];
          const active = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-fit items-center gap-3 rounded-[1.35rem] px-4 py-3 text-sm font-medium transition-colors",
                active ? "bg-brand-primary text-black shadow-[0_14px_36px_rgba(249,115,22,0.24)]" : "border border-white/8 bg-white/[0.03] text-white/62 hover:bg-white/[0.06] hover:text-white"
              )}
            >
              {Icon && <Icon className="h-4 w-4" />}
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
