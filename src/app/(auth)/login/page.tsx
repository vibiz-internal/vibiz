"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signIn.email({ email, password });
      window.location.href = "/dashboard";
    } catch {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <div className="surface-card rounded-[2.25rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-10">
      <span className="surface-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/52">
        Sign in
      </span>
      <h1 className="mt-6 text-4xl font-heading font-semibold tracking-tight text-white">Welcome back</h1>
      <p className="mt-3 text-sm text-white/55">Sign in to your account</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="rounded-[1.25rem] border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
        <Button type="submit" size="lg" className="w-full cta-glow" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-white/45">
        Don&apos;t have an account? <a href="/signup" className="font-medium text-brand-primary hover:text-[#fb923c]">Sign up</a>
      </p>
    </div>
  );
}
