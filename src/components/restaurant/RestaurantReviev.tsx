import React from "react";
import { ReviewType } from "@/lib/types";
import { User } from "@/lib/models";

interface RestaurantReviewProps {
  reviews: ReviewType[];
}

const renderRatingStars = (rating: number): JSX.Element[] => {
  const totalStars = 5;
  const stars: JSX.Element[] = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span key={i} className={i < rating ? "text-black" : "text-gray-300"}>
        &#9733;
      </span>
    );
  }

  return stars;
};

export const RestaurantReview: React.FC<RestaurantReviewProps> = ({
  reviews = [],
}) => {
  return (
    <div className="w-full ">
      <div>
        <p className="text-[24px] font-bold leading-8">
          Үнэлгээ ба сэтгэгдэлүүд
        </p>
      </div>
      <div className="w-full h-full grid grid-cols-2 gap-3 ">
        {reviews.map((review) => (
          <div key={review._id}>
            <div className=" bg-slate-50 rounded-2xl p-4 mt-4 border">
              <p className="font-bold">{review.userId.name}</p>
              <div className="flex">{renderRatingStars(review.rating)}</div>
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
