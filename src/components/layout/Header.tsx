"use client";

import Link from "next/link";
import { Drawers } from "../Drawer";
import { BasketDrawer } from "../basket-drawer/BasketDrawer";
import { parseAsString, useQueryState } from "nuqs";
import { SearchBar } from "../SearchBar";
import { SignInButton } from "../SignInButton";
import { MapPin, ChevronDown } from "lucide-react";
import Map from "../Map";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useQueryState("search", parseAsString);

  const handleDone = () => {
    if (localStorage.getItem("location")) {
      //amjilttai location avlaa
    } else {
      // location songono uu gdg toaster oruul
    }
  };

  const suggestions = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

  return (
    <div className="flex container justify-center h-20 mx-auto mb-12 w-full">
      <div className="flex container justify-center fixed z-10 py-4 w-full bg-white">
        <div className="flex justify-between items-center gap-4">
          <div className="w-[48px] h-[48px] flex items-center">
            <Drawers />
          </div>
          <Link href={"/"}>
            <div className="flex items-center w-96 font-extrabold text-3xl text-gray-800 tracking-tight">
              Хурдан хоол
            </div>
          </Link>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-3 mr-10"
            >
              <div className="flex items-center justify-center gap-1">
                <MapPin />
                <p className="font-semibold text-lg"> Улаанбаатар </p>
              </div>
              <ChevronDown />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-fit px-7 py-6">
            <DialogHeader>
              <DialogTitle>Байршилаа сонгох</DialogTitle>
              <DialogDescription>
                Та байршилаа сонгосноор өөрт ойр ресторануудаа харах боломжтой
                юм.
              </DialogDescription>
            </DialogHeader>
            <div>
              <Map />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" onClick={handleDone}>
                  Болсон
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <SearchBar
          searchTerm={searchTerm || ""}
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
        />
        <div className="flex items-center ml-8">
          <SignInButton />
        </div>
        <BasketDrawer />
      </div>
    </div>
  );
};
