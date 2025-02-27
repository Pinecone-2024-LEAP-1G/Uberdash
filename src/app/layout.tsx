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
import { Toaster } from "sonner";
import { Suspense } from "react";
// import LoadingWrapper from "@/components/LoadingWrapper";
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
  const isDashboardPage = pathname.startsWith("/owner");

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Suspense>
          <SessionProvider>
            <AuthGuard>
              <CartProvider>
                <FoodProvider>
                  <NuqsAdapter>
                    
                      <LocationProvider>
                        {!isSignInPage &&
                          !isBusinessAccountPage &&
                          !isAddRestaurantPage &&
                          !isOwnerPage && <Header />}

                        {children}
                        {!isBusinessAccountPage && !isDashboardPage && (
                          <Footer className={isCheckoutPage ? "mt-72" : ""} />
                        )}
                      </LocationProvider>
                    
                    <Toaster position="bottom-left" />
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
