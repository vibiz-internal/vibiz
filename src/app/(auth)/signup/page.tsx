"use client";
import { useState } from "react";
import { signUp } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { config } from "@/lib/config";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signUp.email({ name, email, password });
      window.location.href = "/dashboard";
    } catch {
      setError("Could not create account. Try a different email.");
    }
    setLoading(false);
  };

  return (
    <div className="surface-card rounded-[2.25rem] p-8 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-10">
      <span className="surface-chip inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/52">
        Create account
      </span>
      <h1 className="mt-6 text-4xl font-heading font-semibold tracking-tight text-white">Create your account</h1>
      <p className="mt-3 text-sm text-white/55">Start using {config.product.name} for free</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Input label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
        {error && <p className="rounded-[1.25rem] border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}
        <Button type="submit" size="lg" className="w-full cta-glow" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-white/45">
        Already have an account? <a href="/login" className="font-medium text-brand-primary hover:text-[#fb923c]">Sign in</a>
      </p>
    </div>
  );
}
