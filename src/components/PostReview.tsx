"use Client";
import { Order, Review } from "@/lib/models";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const PostReview = ({ order }: { order: Order }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState<Review | null>(null);
  const [comment, setComment] = useState<string>("");
  const stars = [1, 2, 3, 4, 5];

  const handleChangeRating = (newRating: number) => {
    setRating(newRating);
  };

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const postFeedPack = async () => {
    try {
      const postReview = await axios.post(`/api/review`, {
        comment,
        rating,
        orderId: order._id,
        userId: order.userId,
        restaurantId: order.orderItems[0].restaurantId,
      });
      setReview(postReview.data.reviews);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  useEffect(() => {
    const getReview = async () => {
      try {
        const fetchReview = await axios.get(
          `/api/review/oneReview/${order._id}`
        );
        setReview(fetchReview.data.review);
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    };
    getReview();
  }, []);

  return (
    <div
      className={`border-t flex-col gap-2 py-2 ${
        order.status !== "Хүргэгдсэн" || review?.orderId === order._id
          ? "hidden"
          : "flex"
      }`}
    >
      <div className="flex justify-between items-center">
        <p>Үнэлгээ ба сэтгэгдэл үлдээх</p>
        <div className="flex">
          {stars?.map((_, index) => (
            <FaStar
              key={index}
              onClick={() => handleChangeRating(index + 1)}
              style={{ color: rating >= index + 1 ? "orange" : "gray" }}
              className="w-4 h-4"
            />
          ))}
        </div>
      </div>
      <Input
        className="w-full h-6 py-4 px-2"
        onChange={handleComment}
        value={comment}
        placeholder="Сэтгэгдэл үлдээх"
      />
      <Button onClick={postFeedPack}>Илгээх</Button>
    </div>
  );
};

export default PostReview;
