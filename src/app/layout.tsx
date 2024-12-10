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
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isSignInPage = pathname === "/sign-in";

  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProvider>
          <AuthGuard>
            <CartProvider>
              <FoodProvider>
                <NuqsAdapter>
                  {!isSignInPage && <Header />}
                  {children}
                  <Footer />
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
