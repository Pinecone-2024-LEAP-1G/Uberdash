"use Client";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@mui/material";
import { useLocation } from "@/Providers/LocationProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const DialogClose = DialogPrimitive.Close;

export const DeliveryFee = (restaurantId: string) => {
  const data = useLocation();
  const { location } = data;
  const [minDist, setMinDist] = useState<number>(0);

  useEffect(() => {
    if (!location.coordinates[0]) return;

    const dataFetcher = async () => {
      try {
        const response = await axios.post(`/api/restaurant-branch/distance`, {
          location: location,
          restaurantId,
        });

        setMinDist(response.data.closestBranch.distance);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetcher();
  }, [location]);
  return (
    <div className="border rounded-2xl text-[12px] flex h-16 py-4">
      <div className="flex flex-col items-center justify-center w-1/2 border-r">
        <p>Төлбөр</p>
        <Dialog>
          <DialogTrigger className="flex items-center gap-2 ">
            <p className="text-[#5E5E5E] ">Хүргэлтийн төлбөр</p>
            <Info width={12} height={12} />
          </DialogTrigger>
          <DialogContent className="p-6 w-[400px]">
            <DialogHeader className="flex flex-col justify-between">
              <DialogTitle className="text-4xl">Хүргэлтийн төлбөр</DialogTitle>
              <DialogDescription className="flex flex-col gap-2 text-base overflow-scroll ">
                <p>
                  олон ресторанаас захиалга хийхэд 1 ресторан тутамд 5000₮
                  бодогдох болно.
                </p>
              </DialogDescription>
              <DialogClose>
                {" "}
                <Button className="w-full text-xl h-14">болсон</Button>
              </DialogClose>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <p>
          {Math.ceil(minDist * 3)} - {Math.ceil(minDist * 3) + 5} минут
        </p>
        <p className="text-[#5E5E5E]">Хүргэлт хийх хугацаа /минут/</p>
      </div>
    </div>
  );
};
