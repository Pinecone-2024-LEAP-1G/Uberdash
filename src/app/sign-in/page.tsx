"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

const SignIn = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${"./signinbg.png"})`,
          zIndex: -1,
        }}
      ></div>

      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold mb-8 text-center">Нэвтрэх</h1>

          <button
            onClick={() => signIn("google", { callbackUrl })}
            className="flex items-center justify-center gap-3 mb-4 w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <FaGoogle size={24} />
            Google хаягаар үргэжлүүлэх
          </button>

          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-gray-300 to-gray-400 text-black p-3 rounded-full shadow-lg hover:from-gray-400 hover:to-gray-500 transition-all"
          >
            <ArrowLeft size={20} />
            Буцах
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
