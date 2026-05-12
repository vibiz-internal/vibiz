import { config } from "@/lib/config";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="surface-card rounded-[2.5rem] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/36">Overview</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Welcome to {config.product.name}</h1>
        <p className="mt-3 max-w-2xl text-white/54">Track projects, plan details, and account controls from a calmer billing workspace.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        <Card>
          <CardContent>
            <p className="text-sm text-white/45">Total Projects</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-white/45">Plan</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">Free</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-sm text-white/45">Usage</p>
            <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white">0%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
