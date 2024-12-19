"use client";

import { RestaurantBranchType } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
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
import { MapPin } from "lucide-react";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "@/Providers/LocationProvider";
import { OwnerRestaurantMap } from "@/components/owner/OwnerRestaurantMap";
import { toast } from "sonner";

type location = {
  type: "Point";
  coordinates: number[];
};

const Branches = () => {
  const [branches, setBranches] = useState<RestaurantBranchType[]>([]);

  const [branchName, setBranchName] = useState<string>("");
  const restaurantId = localStorage.getItem("restaurantId");
  const location = useLocation();

  const myLocation: location = {
    type: "Point",
    coordinates: location.location,
  };

  const dataFetch = async () => {
    const response = await axios.post(
      "/api/restaurant-branch/branchesByRestaurantId",
      { restaurantId }
    );
    setBranches(response.data.branches);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("/api/restaurant-branch", {
        restaurantId,
        branchName,
        location: myLocation,
      });
      dataFetch();
      toast.success("Салбар амжилттай нэмэгдлээ!");
      //amjilttai salbar nemegdlee gdg toast
    } catch (error) {
      toast.error("Салбар нэмэхэд алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="flex flex-col gap-7 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-3 mr-10 w-fit">
            <div className="flex items-center justify-center gap-1">
              <MapPin />
              <p className="font-semibold text-lg">Салбар Нэмэх</p>
            </div>
            <Plus />
          </Button>
        </DialogTrigger>

        <DialogContent className="w-fit px-7 py-6">
          <DialogHeader>
            <DialogTitle>Салбарын байршил солих</DialogTitle>
            <DialogDescription>
              Та тухайн салбарын байршилаа үнэн зөв оруулна уу
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5 items-start">
            <Map />
            <Label htmlFor="name" className="text-right">
              Салбарын нэр оруулна уу?
            </Label>
            <Input
              onChange={(event) => setBranchName(event.target.value)}
              id="name"
              defaultValue=""
              className="col-span-3"
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Буцах</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" onClick={handleSubmit}>
                Үүсгэх
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <OwnerRestaurantMap restauranBranches={branches} />
    </div>
  );
};

export default Branches;
