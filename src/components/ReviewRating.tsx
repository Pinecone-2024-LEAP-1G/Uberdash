import { ArrowDownWideNarrow } from "lucide-react";
import { Comment } from "./Comment";
import { Button } from "./ui/button";
type Review = {
  comment: string;
  rating: number;
  date: string;
  userName: string;
};
export const ReviewRating = (props: { reviews: Review[] }) => {
  const { reviews } = props;

  return (
    <div>
      <h1 className="text-2xl font-semibold gap-4 my-3">Rating and reviews</h1>
      <div className="border rounded-2xl flex px-2 py-4">
        <div className="w-1/3 flex flex-col items-center">
          <p className="text-4xl">{4.6}</p>
          <p>"RatingStar"</p>
          <p>{reviews.length} Ratings</p>
        </div>
        <div className="w-2/3 mr-8">
          {reviews.map((review, index) => (
            <Comment
              key={index}
              comment={review.comment}
              rating={review.rating}
              date={review.date}
              userName={review.userName}
            />
          ))}
          <Button className="bg-[#f3f3f3] text-black rounded-3xl hover:bg-gray-300">
            <ArrowDownWideNarrow />
            Show more
          </Button>
        </div>
      </div>
    </div>
  );
};
