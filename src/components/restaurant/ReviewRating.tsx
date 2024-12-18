"use client";
import { ArrowDownWideNarrow } from "lucide-react";
import { Comment } from "./Comment";
import { Button } from "../ui/button";
import { useState } from "react";
import { Review } from "../../lib/models/review.model";
import { Stars } from "../Stars";

export const ReviewRating = (props: {
  reviews: Review[];
  description: string | undefined;
}) => {
  const { reviews, description } = props;
  const [more, setMore] = useState<boolean>(false);

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
          <p className="text-4xl">{4}</p>
          <p>Үнэлгээний од</p>
          <Stars rating={4} />
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
