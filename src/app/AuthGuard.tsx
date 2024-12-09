"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [, setLoading] = useState(true);

  useEffect(() => {
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

  useEffect(() => {
    const handleLogout = () => {
      router.push("/");
    };

    if (status === "unauthenticated") {
      handleLogout();
    }

    return () => {};
  }, [status, router]);

  return <>{children}</>;
}
