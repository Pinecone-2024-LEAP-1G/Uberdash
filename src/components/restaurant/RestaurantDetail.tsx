"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { RestaurantHero } from "./RestaurantHero";
import { ReviewRating } from "./ReviewRating";
import { MenuItemLastCard } from "./MenuItemLastCard";
import { RestrauntMenu } from "./RestrauntMenu";
import { RestaurantLocation } from "./RestaurantLocation";
import { DeliveryFee } from "./DeliveryFee";
import { Review } from "@/lib/models";
import { MenuItemType } from "@/lib/types";
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

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>();
  const [reviews, setReviews] = useState<Review[]>([]);

  const reviewsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const targetRef = reviewsRef.current;

    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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

  const sortedReviews = reviews
    .filter((review) => review.rating !== null && review.rating !== undefined)
    .sort((a, b) => b.rating - a.rating);

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
            reviews={sortedReviews}
            description={restaurant?.info}
            handleScroll={handleScroll}
          />
        </div>
        <div className="w-1/3 flex flex-col gap-4">
          <DeliveryFee restaurantId={restaurantId} />
          <RestaurantLocation {...restaurantProps} />
        </div>
      </div>
      <h1 className="text-2xl font-semibold my-4">Онцлох бүтээгдэхүүнүүд</h1>
      <div className="grid grid-cols-5 my-4 gap-6">
        {menuItems?.map((menuItem) => {
          return <MenuItemLastCard menuItem={menuItem} key={menuItem._id} />;
        })}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold my-4">Танд зориулсан багц</h1>
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
      <div ref={reviewsRef}>
        <RestaurantRating />
      </div>
    </div>
  );
};
