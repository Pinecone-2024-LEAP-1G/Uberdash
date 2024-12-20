"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ReviewType } from "@/lib/types";
import { RestaurantReview } from "@/components/restaurant/RestaurantReviev";
import { useParams } from "next/navigation";

export const RestaurantRating = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const { restaurantId } = useParams<{ restaurantId: string }>();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(`/api/review/${restaurantId}`);

        setReviews(response.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [restaurantId]);

  return (
    <div className="flex p-4 w-full justify-center items-center">
      <RestaurantReview reviews={reviews} />
    </div>
  );
};
