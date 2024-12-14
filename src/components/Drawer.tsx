import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Heart, ShoppingBag } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UserDashboardButton from "@/components/UserDashboardButton";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

export const Drawers = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [hasOwner, setHasOwner] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (session?.user?.id) {
      fetch(`/api/users?id=${session.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.users.length > 0) {
            const user = data.users[0];
            setHasOwner(user.businessName !== "" || user.vatId !== "");
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [session]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-3 bg-white rounded-full hover:bg-gray-200 focus:outline-none transition">
          <Menu className="w-8 h-8 text-gray-800" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[85%] sm:w-[335px] border-r border-gray-200 bg-white  animate-slide-in-from-left"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex items-center gap-2 py-3 border-b border-gray-200">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <span className="text-lg font-semibold ml-3">
            {session?.user?.name || ""}
          </span>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <Link href="/orders" passHref>
            <button
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              onClick={() => setOpen(false)}
            >
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              Захиалгын түүх
            </button>
          </Link>
          <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md">
            <Heart className="w-5 h-5 text-gray-600" />
            Таалагдсан хоолнууд
          </button>
        </div>
        <Link href="/addRestaurant">
          <button
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md mt-4"
            onClick={() => setOpen(false)}
          >
            <Plus className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Шинэ ресторан нэмэх</span>
          </button>
        </Link>
        {!hasOwner && (
          <div className="mt-4">
            <button
              onClick={() => router.push("/create-business-account")}
              className="w-full bg-gray-100 rounded-md py-2 text-center"
            >
              Бизнесийн аккаунт үүсгэх
            </button>
          </div>
        )}

        <UserDashboardButton />

        {session && (
          <div className="mt-20">
            <button
              onClick={() => signOut()}
              className="w-full bg-black text-white rounded-md py-2 text-center font-medium hover:bg-gray-800"
            >
              Гарах
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
