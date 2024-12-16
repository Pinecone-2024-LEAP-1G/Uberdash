"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      if (pathname === "/checkout") {
        localStorage.setItem("redirectToCheckout", "true");
        router.push("/sign-in");
      } else {
        setLoading(false);
      }
    } else if (status === "authenticated") {
      const redirectToCheckout = localStorage.getItem("redirectToCheckout");
      if (redirectToCheckout === "true") {
        localStorage.removeItem("redirectToCheckout");
        router.push("/checkout");
      } else {
        setLoading(false);
      }
    }
  }, [status, pathname, router]);

  return <>{children}</>;
}
