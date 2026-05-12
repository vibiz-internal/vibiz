import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({ variant = "primary", size = "md", className, href, children, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 disabled:pointer-events-none disabled:opacity-60";
  const variants = {
    primary: "bg-brand-primary text-black shadow-[0_18px_48px_rgba(249,115,22,0.24)] hover:-translate-y-0.5 hover:bg-[#fb923c]",
    secondary: "border border-white/10 bg-white/[0.08] text-white hover:bg-white/[0.12]",
    outline: "border border-white/16 bg-transparent text-white hover:bg-white/[0.06]",
    ghost: "text-white/70 hover:bg-white/[0.06] hover:text-white",
  };
  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 text-sm sm:text-base",
    lg: "px-7 py-4 text-base sm:px-8 sm:text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
