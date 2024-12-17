"use client";
import { AdminSideBar } from "@/components/AdminSideBoard";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Order } from "@/lib/models";

const Reviews = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const restaurantId = localStorage.getItem("restaurantId");

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.post("/api/restaurant/getByOwnerId", {
          ownerId: restaurantId,
        });
        const result = await axios.post(`/api/order/restaurant/`, {
          restaurantId: response.data.restaurant._id,
        });
        setOrders(result.data.orders);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, []);

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
