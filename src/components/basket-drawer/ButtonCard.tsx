"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Buttons = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleCheckout = () => {
    if (status === "unauthenticated") {
      router.push("/sign-in");
    } else {
      router.push("/checkout");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      type="button"
      className="w-[452px] h-[56px] px-2 text-sm rounded-lg bg-[#000000] text-[19.5px] text-white mt-2 hover:bg-[#202020] "
    >
      Захиалах
    </button>
  );
};
