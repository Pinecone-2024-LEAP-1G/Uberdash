"use client";

import "./globals.css";
import { Header } from "../components/layout/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/Footer";
import { CartProvider } from "../Providers/CartProvider";
import { FoodProvider } from "../Providers/MenuItem.Provider";
import { SessionProvider } from "next-auth/react";
import { Toaster, toast } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <CartProvider>
        <FoodProvider>
          <html lang="en">
            <body className="min-h-screen">
              <NuqsAdapter>
                <Header />
                {children}
                <Footer />
                <Toaster />
              </NuqsAdapter>
            </body>
          </html>
        </FoodProvider>
      </CartProvider>
    </SessionProvider>
  );
}
