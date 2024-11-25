import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

type FoodModal = {
  image: string;
  name: string;
  price: string;
  calorie: string;
};

export const FoodCardModal = ({ image, name, price, calorie }: FoodModal) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="rounded-2xl">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <path
              d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3Z"
              fill="currentColor"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-[600px] h-[1000px] ">
        <DialogHeader>
          <DialogTitle>
            <p>{name}</p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-row ">
          <div
            className="w-[492px] h-[492px] bg-cover "
            style={{ backgroundImage: `${image}` }}
          >
            {" "}
          </div>
          <div>
            <p>{price}</p>
            <p>{calorie}</p>
          </div>
        </div>

        <DialogFooter>
          <Button className=" w-[492px] " type="submit">
            Add to Card
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
