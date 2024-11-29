"use client";
import { Review } from "../lib/models/review.model";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface ReviewContextType {
  reviews: Review[];
}

const ReviewContext = createContext<ReviewContextType>({
  reviews: [],
});

const useReview = () => useContext(ReviewContext);

interface ReviewProviderProps {
  children: ReactNode;
}

const ReviewProvider: React.FC<ReviewProviderProps> = ({ children }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/api/review`
        );
        setReviews(response.data.review);
      } catch (err) {
        console.error("Error fetching Review:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <ReviewContext.Provider value={{ reviews }}>
      {children}
    </ReviewContext.Provider>
  );
};

export { useReview, ReviewProvider };
