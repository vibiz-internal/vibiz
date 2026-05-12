import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BillingPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/36">Plan</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.04em] text-white">Billing</h1>
      </div>
      <Card>
        <CardContent>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-white">Current plan: Free</p>
              <p className="mt-2 text-sm text-white/50">Upgrade to unlock more features.</p>
            </div>
            <Button href="/pricing" className="cta-glow">Upgrade</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
