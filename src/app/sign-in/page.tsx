"use client";

import { signIn } from "next-auth/react";

const Home = () => {
  return (
    <div className="">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${"./signinbg.png"})`,
            zIndex: -1,
          }}
        ></div>

        <div className="flex items-center justify-center h-full">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Sign In</h1>
            <button
              onClick={() => signIn("google")}
              className="w-[300px] bg-gray-300 text-black p-2 rounded hover:bg-white-400"
            >
              Google хаягаар үргэжлүүлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
