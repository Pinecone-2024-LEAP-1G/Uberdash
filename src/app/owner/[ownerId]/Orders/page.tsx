"use client";
import { AdminSideBoard } from "@/components/AdminSideBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ReviewType } from "@/lib/types";
import { Order } from "@/lib/models";

const restaurantOwnerId: string = "673e90415a6e8e222657bbb4";

const Reviews = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/restaurant/getByOwnerId",
          {
            ownerId: restaurantOwnerId,
          }
        );
        const result = await axios.post(
          `http://localhost:3000/api/order/restaurant/`,
          {
            restaurantId: response.data.restaurant._id,
          }
        );
        console.log(result.data.orders);
        setOrders(result.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);
  console.log(orders);

  const rows = orders.map((order) => ({
    id: order._id,
    date: new Date(Date.now()),
    customer: order.userId,
    TotalPrice: order.priceWithoutDiscount,
    status: order.status,
  }));

  const columns: GridColDef[] = [
    { field: "date", headerName: "Date", width: 250 },
    { field: "customer", headerName: "Customer", width: 300 },
    { field: "TotalPrice", headerName: "Total Price $", width: 150 },
    { field: "status", headerName: "Status", width: 200 },
  ];

  return (
    <div className="p-4 flex gap-3 w-full">
      <AdminSideBoard />
      <div style={{ flex: 1, height: 500 }}>
        <h1 className="text-xl font-bold mb-4">Orders</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[10]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10, page: 0 },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Reviews;
