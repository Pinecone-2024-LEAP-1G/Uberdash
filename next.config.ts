import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI!,
    AUTH_SECRET: process.env.AUTH_SECRET!,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID!,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET!,
  },
};

export default nextConfig;
