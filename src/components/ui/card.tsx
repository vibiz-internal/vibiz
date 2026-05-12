import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("surface-card rounded-[2rem]", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0 sm:p-8 sm:pb-0", className)}>{children}</div>;
}

export function CardContent({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-8", className)}>{children}</div>;
}
