import { RatingStar } from "../RatingStar";
import { Review } from "../../lib/models/review.model";
import { format } from "date-fns";

export const Comment = (props: Review) => {
  const { comment, rating, createdAt } = props;

  const formattedDate = format(new Date(createdAt), "yyyy/MM/dd");

  return (
    <div className="text-sm mb-2">
      <p className=" overflow-hidden line-clamp-3">&quot;{comment}&quot;</p>
      <div className="flex gap-2 text-gray-500">
        <RatingStar rating={rating} date={formattedDate} />
      </div>
    </div>
  );
};
