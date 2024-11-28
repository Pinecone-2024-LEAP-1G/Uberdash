import type { Metadata } from "next";
import "./globals.css";
import { connectToMongoDB } from "@/lib/db";
import { Header } from "../components/layout/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Хурдан хоол",
  description: "Хоолоо захиалж ид",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectToMongoDB();

  return (
    <html lang="en">
      <body className="min-h-screen">
        <NuqsAdapter>
          <Header />
          {children}
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
