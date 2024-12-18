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
import { Review } from "@/lib/models";
import { MenuItemType } from "@/lib/types";
import { RestaurantReview } from "@/components/restaurant/RestaurantReviev";
import { RestaurantRating } from "@/app/owner/[ownerId]/Reviews/restaurantReview";

type Restaurant = {
  name: string;
  banner: string;
  image: string;
  info: string;
};

export const RestaurantDetail = ({
  restaurantId,
}: {
  restaurantId: string;
}) => {
  const restaurantProps = { restaurantId: restaurantId };

  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/review/${restaurantId}`);
        setReviews(response.data.reviews);
      } catch (err) {
        console.log("Error fetching Review:", err);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`/api/restaurant/${restaurantId}`);
        setRestaurant(response.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `/api/menu-item/restaurant/${restaurantId}`
        );
        setMenuItems(response.data.menuItems);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="container mx-auto max-w-[1200px]">
      <RestaurantHero
        name={restaurant?.name}
        banner={restaurant?.banner}
        image={restaurant?.image}
      />
      <div className="flex gap-4">
        <div className="w-2/3">
          <ReviewRating reviews={reviews} description={restaurant?.info} />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <DeliveryFee restaurantId={restaurantId} />
          <RestaurantLocation {...restaurantProps} />
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">Featured Items</h1>
      <div className="grid grid-cols-5 my-4 gap-6">
        {menuItems?.map((menuItem) => {
          return <MenuItemLastCard menuItem={menuItem} key={menuItem._id} />;
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
        {menuItems?.map((menuItem) => {
          return (
            <div key={menuItem._id} className="col-span-2">
              <RestrauntMenu
                menuItem={menuItem}
                percentage="80%"
                like="(1100)"
              />
            </div>
          );
        })}
      </div>
      <div>
        <RestaurantRating />
      </div>
    </div>
  );
};
