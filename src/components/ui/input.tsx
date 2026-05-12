import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && <label htmlFor={id} className="block px-1 text-sm font-medium text-white/68">{label}</label>}
      <input
        id={id}
        className={cn(
          "w-full rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none transition-all placeholder:text-white/30 focus:border-brand-primary/70 focus:bg-white/[0.08] focus:ring-4 focus:ring-brand-primary/10",
          error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/15",
          className
        )}
        {...props}
      />
      {error && <p className="px-1 text-sm text-red-300">{error}</p>}
    </div>
  );
}
