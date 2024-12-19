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
    MONGODB_URI: process.env.MONGODB_URI ?? "",
    AUTH_SECRET: process.env.AUTH_SECRET ?? "",
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID ?? "",
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET ?? "",
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL ?? "",
    NEXT_PUBLIC_URL_PROD: process.env.NEXT_PUBLIC_URL_PROD ?? "",
    CLOUDINARY_URL: process.env.CLOUDINARY_URL ?? "",
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "",
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET:
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "",
  },
};

export default nextConfig;
