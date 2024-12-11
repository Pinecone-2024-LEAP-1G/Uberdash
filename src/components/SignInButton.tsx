"use client";

import { signIn, useSession } from "next-auth/react";

export const SignInButton: React.FC = () => {
  const { data: session } = useSession();

  if (session) return null;

  return (
    <button
      onClick={() => signIn("google")}
      className="w-[200px] bg-[#F3F3F3] rounded-full ml-8 py-3 text-lg font-semibold tracking-wide text-gray-600 hover:bg-gray-200"
    >
      Нэвтрэх
    </button>
  );
};
