"use client";
import { AdminSideBar } from "@/components/AdminSideBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ReviewType } from "@/lib/types";
import { ReviewTable } from "@/components/ReviewTable";

const Reviews = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const restaurantId: string = "674695388735f0d1dadc3b7f";
        const response = await axios.get(`/api/review/${restaurantId}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="flex p-4 w-full justify-center items-center">
      <ReviewTable reviews={reviews} />
    </div>
  );
};

export default Reviews;
