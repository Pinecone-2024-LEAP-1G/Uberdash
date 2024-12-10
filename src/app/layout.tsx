"use client";

import "./globals.css";
import { Header } from "../components/layout/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/Footer";
import { CartProvider } from "../Providers/CartProvider";
import { FoodProvider } from "../Providers/MenuItem.Provider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { AuthGuard } from "./AuthGuard";
import { Suspense } from "react";
import { LocationProvider } from "@/Providers/LocationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense>
          <SessionProvider>
            <AuthGuard>
              <CartProvider>
                <LocationProvider>
                  <FoodProvider>
                    <NuqsAdapter>
                      <Header />
                      {children}
                      <Footer />
                      <Toaster />
                    </NuqsAdapter>
                  </FoodProvider>
                </LocationProvider>
              </CartProvider>
            </AuthGuard>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
