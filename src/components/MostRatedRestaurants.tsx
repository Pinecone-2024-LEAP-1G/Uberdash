import axios from "axios";
import { useEffect, useState } from "react";
import { Restaurant } from "@/lib/models";
import { MenuItemLastCard } from "./restaurant/MenuItemLastCard";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import { SkeletonCard } from "./SkeletonCard";

export const MostRatedRestaurants = () => {
  const [bestRestaurants, setBestRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(
          "/api/restaurant/bestRatedRestaurants"
        );
        setBestRestaurants(response.data.restaurants);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    dataFetch();
  }, []);
  const restaurantsToShow = bestRestaurants.slice(0, 8);
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-2xl"> Өндөр үнэлгээтэй ресторанууд </p>
      <div className="grid grid-cols-4 max-w-[1200px] mx-auto gap-10">
        {loading
          ? Array(4)
              .fill(null)
              .map((_, index) => <SkeletonCard key={index} />)
          : restaurantsToShow.map((restaurant) => (
              <Link href={`/restaurant/${restaurant._id}`} key={restaurant._id}>
                <MenuItem
                  restaurantId={restaurant._id}
                  image={restaurant.banner}
                  name={restaurant.name}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};
