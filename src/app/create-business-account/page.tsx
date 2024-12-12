"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateBusinessAccount = () => {
  const user = useSession();
  const router = useRouter();

  const [vatId, setVatId] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");

  const handleClick = async () => {
    const response = await axios.put("/api/users/create-business", {
      _id: user.data?.user.id,
      businessName: businessName,
      vatId: vatId,
    });
    if (response.data.message == "success") {
      //amjilttai business acc uuslee toast
      router.push("/addRestaurant");
    } else {
      //amjiltgui bolson toast
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Бизнесийн аккаунт үүсгэх
        </h1>
        <div>
          <label className="block mb-4">
            Бизнесийн нэр:
            <input
              onChange={(event) => setBusinessName(event.target.value)}
              type="text"
              name="businessName"
              className="block border rounded p-2 w-full mt-1"
              required
            />
          </label>
          <label className="block mb-4">
            НӨАТ-ийн дугаар:
            <input
              onChange={(event) => setVatId(event.target.value)}
              type="text"
              name="vatId"
              className="block border rounded p-2 w-full mt-1"
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              handleClick();
            }}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition"
          >
            Илгээх
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Нүүр хуудас руу буцах
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessAccount;
