"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantHero } from "./RestaurantHero";
import { ReviewRating } from "./ReviewRating";
import { MenuItemLastCard } from "./MenuItemLastCard";
import { CircleX, Search } from "lucide-react";
import { Input } from "../ui/input";
import { RestrauntMenu } from "./RestrauntMenu";
import { RestaurantLocation } from "./RestaurantLocation";
import { DeliveryFee } from "./DeliveryFee";
import { useFood } from "../../Providers/MenuItem.Provider";
import { Review } from "@/lib/models";
import { Schema } from "mongoose";
// import { useSession } from "next-auth/react";

type Restaurant = {
  name: string;
  banner: string;
  image: string;
  info: string;
};

export const RestaurantDetail = ({
  restaurantId,
}: {
  restaurantId: Schema.Types.ObjectId;
}) => {
  const restaurantProps = { restaurantId: restaurantId };

  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const { foodItems } = useFood();
  // const { data: session } = useSession();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
          }/api/review`
        );
        setReviews(response.data.review);
      } catch (err) {
        console.log("Error fetching Review:", err);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `
     ${
       process.env.NEXT_PUBLIC_URL ?? process.env.NEXT_PUBLIC_URL_PROD
     }/api/restaurant/${restaurantId}`
        );
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredReviews = reviews.filter(
    (review) => review.restaurantId === restaurantId
  );

  return (
    <div className="container mx-auto max-w-[1200px]">
      <RestaurantHero
        name={restaurant?.name}
        banner={restaurant?.banner}
        image={restaurant?.image}
      />
      <div className="flex gap-4">
        <div className="w-2/3">
          <ReviewRating
            reviews={filteredReviews}
            description={restaurant?.info}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <DeliveryFee />
          <RestaurantLocation {...restaurantProps} />
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">Featured Items</h1>
      <div className="grid grid-cols-5 my-4 gap-6">
        {foodItems.map((foodItem) => {
          {
            if (foodItem.restaurantId === restaurantId) {
              return (
                <MenuItemLastCard menuItem={foodItem} key={foodItem._id} />
              );
            } else {
              return;
            }
          }
        })}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold my-4">Picked for you</h1>
        <div className="bg-[#f3f3f3] rounded-3xl w-[360px] flex items-center justify-center h-8">
          <div className="flex justify-center items-center w-8 h-8">
            <Search style={{ width: 14, height: 14 }} />
          </div>
          <Input
            style={{ fontSize: 14 }}
            type="text"
            placeholder={`Search in ${"Dave's Hot Chicken"}`}
            className="bg-[#F3F3F3] h-8 rounded-3xl w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={search}
            onChange={handleSearch}
          />
          <div
            className={` justify-center items-center w-8 h-8  ${
              !search ? "hidden" : "flex"
            }`}
          >
            <CircleX
              role="button"
              fill="black"
              color="white"
              style={{ width: 16, height: 16 }}
              onClick={() => setSearch("")}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 my-4 gap-6">
        {foodItems.map((foodItem) => {
          {
            if (foodItem.restaurantId === restaurantId) {
              return (
                <div key={foodItem._id} className="col-span-2">
                  <RestrauntMenu
                    menuItem={foodItem}
                    percentage="80%"
                    like="(1100)"
                  />
                </div>
              );
            } else {
              return;
            }
          }
        })}
      </div>
    </div>
  );
};
