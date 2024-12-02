import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface Restaurant {
  name: string;
  image: string;
}

const restaurant: Restaurant[] = [
  {
    name: "7-Eleven",
    image:
      "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
  },
];

export const RestaurantList: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl font-bold">Stores near you</p>
        <div>
          <button
            onClick={() => handleScroll("left")}
            className="rounded-full bg-gray-300 p-2 mr-2"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="rounded-full bg-gray-300 p-2"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex  space-x-4">
        {restaurant.map((restaurant, index) => (
          <div key={index} className="min-w-[130px] text-center">
            <img
              src={restaurant.image}
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="font-medium text-lg mt-2">{restaurant.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
