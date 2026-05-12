import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning";
}

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variants = {
    default: "border border-white/10 bg-white/[0.06] text-white/75",
    primary: "bg-brand-primary text-black",
    success: "bg-emerald-400/15 text-emerald-100",
    warning: "bg-amber-500/20 text-amber-50",
  };

  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.18em]", variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
