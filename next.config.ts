import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.e2b.app"],
  env: {
    NEXT_PUBLIC_AUTH_ENABLED: process.env.DATABASE_URL ? "true" : "false",
  },
};

export default nextConfig;
