"use client";

import { restaurantBranchType } from "@/lib/types";
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

type location = {
  type: "Point";
  coordinates: number[];
};

const Branches = () => {
  const [branches, setBranches] = useState<restaurantBranchType[]>([]);
  const restaurantId = localStorage.getItem("restaurantId");
  const location = useLocation();

  const myLocation: location = {
    type: "Point",
    coordinates: location.location,
  };

  const [branchName, setBranchName] = useState<string>("");

  const handleSubmit = async () => {
    try {
      await axios.post("/api/restaurant-branch", {
        restaurantId,
        branchName,
        location: myLocation,
      });
      //amjilttai salbar nemegdlee gdg toast
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      const response = await axios.post(
        "/api/restaurant-branch/branchesByRestaurantId",
        { restaurantId }
      );
      setBranches(response.data.branches);
    };
    dataFetch();
  }, [restaurantId]);

  return (
    <div className="flex flex-col gap-7 items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-3 mr-10"
          >
            <div className="flex items-center justify-center gap-1">
              <MapPin />
              <p className="font-semibold text-lg"> Шинэ Салбар Нэмэх </p>
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
      {branches.map((branch, index) => {
        return <div key={index}>{branch.branchName}</div>;
      })}
    </div>
  );
};
export default Branches;
