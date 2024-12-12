"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Heart, ShoppingBag } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image"; // Importing Next.js Image component
import Link from "next/link";

export const Drawers = () => {
  const { data: session } = useSession();

  const SHEET_SIDES = ["left"] as const;

  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button className="p-3 bg-white rounded-full hover:bg-gray-200 focus:outline-none  transition-colors duration-200 ease-in hover:duration-150">
              <Menu className="w-8 h-8 text-gray-800" />
            </button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="animate-slide-in-left"
            style={{ maxWidth: "335px" }}
          >
            <SheetTitle></SheetTitle>

            <div className="flex items-center gap-2 py-3">
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  alt="User Avatar"
                  width={40} // Set width
                  height={40} // Set height
                  className="rounded-full"
                />
              )}
              <span className="text-lg font-semibold ml-3">
                {session?.user?.name || ""}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Link href={"/orders"}>
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                  <ShoppingBag className="w-5 h-5 text-gray-600" />
                  Захиалгын түүх
                </button>
              </Link>
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <Heart className="w-5 h-5 text-gray-600" />
                Таалагдсан хоолнууд
              </button>
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#F3F3F3] rounded-full py-2 text-center">
                Бизнесийн аккаунт үүсгэх
              </button>
            </div>

            {session && (
              <div className="mt-4">
                <button
                  onClick={() => signOut()}
                  className="w-full bg-[#F3F3F3] rounded-full py-2 text-center"
                >
                  Гарах
                </button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
};
