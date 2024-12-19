"use client";

import { signIn, useSession } from "next-auth/react";

export const SignInButton: React.FC = () => {
  const { data: session } = useSession();

  if (session) return null;

  return (
    <button
      onClick={() => signIn("google")}
      className="w-[200px] bg-green-400 rounded-full ml-8 py-3 text-lg font-semibold tracking-wide text-white hover:bg-green-600"
    >
      Нэвтрэх
    </button>
  );
};
