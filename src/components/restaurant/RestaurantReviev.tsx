import React from "react";
import { ReviewType } from "@/lib/types";

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
            <div className="  rounded-2xl p-4 mt-4 border">
              <p className="text-[16px] font-medium leading-5 mb-1">
                {review.userId.name}
              </p>
              <div className="flex text-[14px] font-normal mt-1 text-[#5e5e5e] gap-2">
                {renderRatingStars(review.rating)}
                {new Date(review.createdAt).toLocaleDateString()}
              </div>
              <p className="mt-1">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
