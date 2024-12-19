"use client";
import { ArrowDownWideNarrow } from "lucide-react";
import { Comment } from "./Comment";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Review } from "../../lib/models/review.model";
import { Stars } from "../Stars";
import axios from "axios";

export const ReviewRating = (props: {
  reviews: Review[];
  description: string | undefined;
}) => {
  const { reviews, description } = props;
  const [more, setMore] = useState<boolean>(false);

  const [rating, setRating] = useState<string>("");
  useEffect(() => {
    let sum: number = 0;
    reviews.map((review) => {
      sum += review.rating;
    });
    setRating((sum / reviews.length).toFixed(1).toString());
  }, [reviews]);

  return (
    <div>
      <div className="mt-4 ">
        <p
          className={`  text-sm w-full ${
            !more ? "overflow-hidden h-10" : "overflow-none h-auto"
          }`}
        >
          {description}
        </p>
        <span
          className="text-sm font-bold"
          role="button"
          onClick={() => setMore(!more)}
        >
          {`${!more ? "More" : "Less"}`}
        </span>
      </div>
      <h1 className="text-2xl font-semibold gap-4 my-3">
        Үнэлгээ ба сэтгэгдэл
      </h1>
      <div className="border rounded-2xl flex px-2 py-4">
        <div className="w-1/3 flex flex-col items-center">
          <div className={`${rating === "NaN" ? "hidden" : "block"}`}>
            <p className="text-4xl">{rating}</p>{" "}
          </div>
          <p>Үнэлгээний од</p>
          <Stars rating={Number(rating)} />
          <p>{reviews?.length} Үнэлгээ</p>
        </div>
        <div className="w-2/3 mr-8">
          {reviews?.map((review, index) => (
            <Comment
              key={index}
              comment={review.comment}
              rating={review.rating}
              createdAt={review.createdAt}
              userId={review.userId}
              _id={review._id}
              restaurantId={review.restaurantId}
            />
          ))}
          <Button className="bg-[#f3f3f3] text-black rounded-3xl hover:bg-gray-300">
            <ArrowDownWideNarrow />
            Илүү ихийг харах
          </Button>
        </div>
      </div>
    </div>
  );
};
