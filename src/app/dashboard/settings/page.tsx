"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/36">Profile</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.04em] text-white">Settings</h1>
      </div>
      <Card>
        <CardContent className="space-y-5">
          <Input label="Name" id="name" defaultValue="" />
          <Input label="Email" id="email" type="email" defaultValue="" />
          <Button className="cta-glow">Save changes</Button>
        </CardContent>
      </Card>
    </div>
  );
}
