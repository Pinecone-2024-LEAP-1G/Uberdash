"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { RestaurantHero } from "./RestaurantHero";
import { ReviewRating } from "./ReviewRating";
import { MenuItemLastCard } from "../MenuItemLastCard";
import { CircleX, Search } from "lucide-react";
import { Input } from "../ui/input";
import { RestrauntMenu } from "../RestrauntMenu";
import { RestaurantLocation } from "./RestaurantLocation";
import { DeliveryFee } from "./DeliveryFee";
import { useProduct } from "@/app/Providers/MenuItem.Provider";

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
  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const { productItems } = useProduct();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/restaurant/${restaurantId}`
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

  const myArr = [
    {
      comment: `My friend ordered from here a few months ago and I fell in love. The
fries are seasoned perfectly and the chicken is nice and juicy. I'm not
a big fan of chicken, but I'll definitely have some Dave's Hot Chicken!
Thank you!`,
      rating: 4.6,
      userName: "Janet C",
      date: "09/19/24",
    },
    {
      comment: `My friend ordered from here a few months ago and I fell in love. The
fries are seasoned perfectly and the chicken is nice and juicy. I'm not
a big fan of chicken, but I'll definitely have some Dave's Hot Chicken!
Thank you!`,
      rating: 4.6,
      userName: "Janet C",
      date: "09/19/24",
    },
  ];
  console.log(productItems);

  return (
    <div className="container mx-auto max-w-[1200px]">
      <RestaurantHero
        name={restaurant?.name}
        banner={restaurant?.banner}
        image={restaurant?.image}
      />
      <div className="flex gap-4">
        <div className="w-2/3">
          <ReviewRating reviews={myArr} description={restaurant?.info} />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <DeliveryFee />
          <RestaurantLocation />
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">Featured Items</h1>
      <div className="grid grid-cols-5 my-4 gap-6">
        {productItems.map((productItem, _index) => {
          {
            if (productItem.restaurantId === restaurantId) {
              return (
                <MenuItemLastCard
                  menuItem={productItem}
                  key={productItem._id}
                />
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
        {productItems.map((productItem, _index) => {
          {
            if (productItem.restaurantId === restaurantId) {
              return (
                <div key={productItem._id} className="col-span-2">
                  <RestrauntMenu
                    menuItem={productItem}
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
