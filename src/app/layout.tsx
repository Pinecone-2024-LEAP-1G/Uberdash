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
import LoadingWrapper from "@/components/LoadingWrapper";
import { LocationProvider } from "@/Providers/LocationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isSignInPage = pathname === "/sign-in";
  const isCheckoutPage = pathname === "/checkout";
  const isBusinessAccountPage = pathname === "/create-business-account";
  const isAddRestaurantPage = pathname === "/addRestaurant";
  const isOwnerPage = pathname.startsWith("/owner/");

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense>
          <SessionProvider>
            <AuthGuard>
              <CartProvider>
                <FoodProvider>
                  <NuqsAdapter>
                    <LoadingWrapper>
                      <LocationProvider>
                        {!isSignInPage &&
                          !isBusinessAccountPage &&
                          !isAddRestaurantPage &&
                          !isOwnerPage && <Header />}
                        {children}
                        {!isBusinessAccountPage && (
                          <Footer className={isCheckoutPage ? "mt-72" : ""} />
                        )}
                      </LocationProvider>
                    </LoadingWrapper>
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
