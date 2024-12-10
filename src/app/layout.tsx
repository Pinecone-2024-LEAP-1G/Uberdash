"use client";

import "./globals.css";
import React, { Suspense, lazy } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "../Providers/CartProvider";
import { FoodProvider } from "../Providers/MenuItem.Provider";
import { LocationProvider } from "@/Providers/LocationProvider";
import { AuthGuard } from "./AuthGuard";

const Header = lazy(() =>
  import("../components/layout/Header").then((module) => ({
    default: module.Header,
  }))
);

const Footer = lazy(() =>
  import("@/components/Footer").then((module) => ({
    default: module.Footer,
  }))
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense fallback={<Loading />}>
          <SessionProvider>
            <AuthGuard>
              <CartProvider>
                <LocationProvider>
                  <FoodProvider>
                    <NuqsAdapter>
                      <Header />
                      <main>{children}</main>
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

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
