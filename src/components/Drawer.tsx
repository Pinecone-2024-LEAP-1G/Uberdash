"use client";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Heart, ShoppingBag, HelpCircle } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { RestaurantLike } from "./RestaurantLike";
import Link from "next/link";

export const Drawers = () => {
  const { data: session } = useSession();

  const SHEET_SIDES = ["left"] as const;

  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button className="p-3 bg-white rounded-full hover:bg-gray-200 focus:outline-none shadow transition-colors duration-200 ease-in hover:duration-150">
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
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                {/*zurag oruulah heseg datanaas */}
              </div>
              <span className="text-lg font-semibold">
                {session?.user?.name || "User"}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                Orders
              </button>
              <Link href="/favourites">
                <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                  <Heart className="w-5 h-5 text-gray-600" />
                  Favorites
                </button>
              </Link>

              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                Help
              </button>
            </div>

            <div className="mt-4">
              <button className="w-full bg-[#F3F3F3] rounded-full py-2 text-center">
                Create a business account
              </button>
              <button className="w-full bg-[#F3F3F3] rounded-full py-2 text-center mt-2">
                Add your restaurant
              </button>
              <button className="w-full bg-[#F3F3F3] rounded-full py-2 text-center mt-2">
                Sign up to deliver
              </button>
            </div>

            {session && (
              <div className="mt-4">
                <button
                  onClick={() => signOut()}
                  className="w-full bg-[#F3F3F3] rounded-full py-2 text-center"
                >
                  Sign out
                </button>
              </div>
            )}
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
};
