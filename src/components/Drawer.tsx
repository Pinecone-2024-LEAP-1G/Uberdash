"use client";
import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Drawers() {
  const SHEET_SIDES = ["left"] as const;

  type SheetSide = (typeof SHEET_SIDES)[number];
  return (
    <Dialog>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTitle></SheetTitle>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side} style={{ maxWidth: "335px" }}>
            <div className="grid gap-4 py-4">
              <button className="h-[46px] bg-black rounded-2xl text-base flex text-center justify-center text-white py-3 ">
                Sign up
              </button>
              <button className="h-[46px] bg-slate-300 rounded-2xl flex text-center justify-center text-black py-3  ">
                Log in
              </button>
            </div>
            <div>
              <button className="flex pt-3">Create a business account</button>
              <button className="flex pt-4">Add your restaurant</button>
              <button className="flex pt-4">Sign up to deliver</button>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </Dialog>
  );
}
