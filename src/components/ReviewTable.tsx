import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReviewType } from "@/lib/types";

type ReviewTableProps = {
  reviews: ReviewType[];
};

const renderRatingStars = (rating: number) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span
        key={i}
        className={i < rating ? "text-yellow-500" : "text-gray-300"}
      >
        &#9733;
      </span>
    );
  }
  return stars;
};

export const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>Үйлчлүүлэгчидийн сэтгэгдэл</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[400px]">Comment</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>User ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.map((review) => (
            <TableRow key={review._id}>
              <TableCell className="font-medium">{review.comment}</TableCell>
              <TableCell>
                {new Date(review.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{renderRatingStars(review.rating)}</TableCell>
              <TableCell>{review.userId.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Reviews</TableCell>
            <TableCell className="text-right">{reviews.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
