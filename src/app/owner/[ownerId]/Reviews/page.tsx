"use client";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const restaurantOwnerId: string = "673e90415a6e8e222657bbb4";

type Review = {
  _id: string;
  userId: string;
  restaurantId: string;
  comment: string;
  rating: number;
  createdAt: string; // ISO 8601 string provided by the backend
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/restaurant/getReviews", {
        ownerId: restaurantOwnerId,
      })
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const rows = reviews.map((review) => ({
    id: review._id,
    date: new Date(review.createdAt).toLocaleDateString(),
    customer: review.userId,
    rating: review.rating,
    comment: review.comment,
  }));

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 150 },
    { field: "customer", headerName: "Customer", width: 200 },
    { field: "rating", headerName: "Rating", width: 100 },
    { field: "comment", headerName: "Comment", width: 400 },
  ];

  return (
    <div className="p-4 flex gap-3 w-full">
      <AdminSideBoard />
      <div style={{ flex: 1, height: 500 }}>
        <h1 className="text-xl font-bold mb-4">Reviews</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[10]} // Available page sizes
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 }, // Default pagination state
            },
          }}
        />
      </div>
    </div>
  );
};

export default Reviews;
