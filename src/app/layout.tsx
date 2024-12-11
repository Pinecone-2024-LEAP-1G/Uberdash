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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isSignInPage = pathname === "/sign-in";
  const isCheckoutPage = pathname === "/checkout";
  const isBusinessAccountPage = pathname === "/create-business-account";

  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProvider>
          <AuthGuard>
            <CartProvider>
              <FoodProvider>
                <NuqsAdapter>
                  {!isSignInPage && !isBusinessAccountPage && <Header />}
                  {children}
                  {!isBusinessAccountPage && (
                    <Footer className={isCheckoutPage ? "mt-72" : ""} />
                  )}
                  <Toaster />
                </NuqsAdapter>
              </FoodProvider>
            </CartProvider>
          </AuthGuard>
        </SessionProvider>
      </body>
    </html>
  );
}
