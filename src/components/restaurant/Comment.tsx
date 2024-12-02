import { RatingStar } from "../RatingStar";
import { Review } from "../../lib/models/review.model";
import { format } from "date-fns";

export const Comment = (props: Review) => {
  const { comment, rating, createdAt, userId } = props;

  const formattedDate = format(new Date(createdAt), "yyyy/MM/dd");

  return (
    <div className="text-sm mb-2">
      <p className=" overflow-hidden line-clamp-3">"{comment}"</p>
      <div className="flex gap-2 text-gray-500">
        <RatingStar name={userId} rating={rating} date={formattedDate} />
      </div>
    </div>
  );
};
