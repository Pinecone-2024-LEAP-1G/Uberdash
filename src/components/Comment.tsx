import { useUser } from "@/Providers/User.Provider";
import { Review } from "./restaurant/RestaurantDetail";
import { format } from "date-fns";
import { RatingInfo } from "./RatingInfo";

export const Comment = (props: Review) => {
  const { comment, rating, createdAt, userId } = props;

  const formattedDate = format(new Date(createdAt), "yyyy/MM/dd");

  return (
    <div className="text-sm mb-2">
      <p className=" overflow-hidden line-clamp-3">{comment}</p>
      <div className="flex gap-2 text-gray-500">
        <p>{rating}</p>
        <p>{userId}</p>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};
