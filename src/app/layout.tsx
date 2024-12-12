"use client";

import "./globals.css";
import { Header } from "../components/layout/Header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/Footer";
import { CartProvider } from "../Providers/CartProvider";
import { FoodProvider } from "../Providers/MenuItem.Provider";
import { SessionProvider } from "next-auth/react";
import { AuthGuard } from "./AuthGuard";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isSignInPage = pathname === "/sign-in";
  const isCheckoutPage = pathname === "/checkout"; // Update the path if needed.

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense>
          <SessionProvider>
            <AuthGuard>
              <CartProvider>
                <FoodProvider>
                  <NuqsAdapter>
                    {!isSignInPage && <Header />}
                    {children}
                    <Footer className={isCheckoutPage ? "mt-72" : ""} />
                    <Toaster />
                  </NuqsAdapter>
                </FoodProvider>
              </CartProvider>
            </AuthGuard>
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
