"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Address, User } from "@/lib/models";
import { OrderItem } from "@/lib/models";
import moment from "moment";
import { MenuItem, Select } from "@mui/material";
import AddressDialog from "@/components/AddressDialog";

type OrderType = {
  createdAt: Date;
  orderItemsDetails: OrderItem[];
  userDetails: User[];
  _id: string;
  status: Status;
  totalPrice: number;
  deliveryAddressId: string;
};

type Status =
  | "Хүлээгдэж байна"
  | "Цуцалсан"
  | "Хийж эхлэж байна"
  | "Хийгдэж дууссан"
  | "Хүргэлтэнд гархаар хүлээгдэж байна"
  | "Хүргэлтэнд явж байна"
  | "Хүргэгдсэн";

const Reviews = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const restaurantId = localStorage.getItem("restaurantId");
  const [address, setAddress] = useState<Address>();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const result = await axios.post(`/api/order/restaurant`, {
          restaurantId: restaurantId,
        });

        const sortedOrders = result.data.sort((a: OrderType, b: OrderType) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });

        setOrders(sortedOrders);
      } catch (error) {
        console.log(error);
      }
    };
    dataFetch();
  }, [restaurantId]);

  const getAddress = async (order: OrderType) => {
    try {
      const fetchAddress = await axios.get(
        `/api/order/address/${order.deliveryAddressId}`
      );
      setAddress(fetchAddress.data.order.deliveryAddressId);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handleStatusChange = async (id: string, newStatus: Status) => {
    try {
      setOrders((prev) =>
        prev?.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );

      await axios.put(`/api/order`, {
        _id: id,
        status: newStatus,
      });
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  const rows = orders?.map((order) => ({
    id: order._id,
    date: moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
    customer: order.userDetails[0]?.name,
    TotalPrice: order.totalPrice || 0,
    status: order.status,
  }));

  const columns: GridColDef[] = [
    { field: "date", headerName: "Огноо", width: 250 },
    { field: "customer", headerName: "Үйлчлүүлэгч", width: 300 },
    { field: "TotalPrice", headerName: "Нийт төлбөр ₮", width: 150 },
    {
      field: "status",
      headerName: "Захиалгын төлөв",
      width: 300,
      renderCell: (params) => {
        const { id, value } = params;
        return (
          <Select
            value={value}
            onChange={(event) =>
              handleStatusChange(id as string, event.target.value as Status)
            }
            fullWidth
          >
            <MenuItem value="Хүлээгдэж байна">Хүлээгдэж байна</MenuItem>
            <MenuItem value="Цуцалсан">Цуцалсан</MenuItem>
            <MenuItem value="Хийж эхлэж байна">Хийж эхлэж байна</MenuItem>
            <MenuItem value="Хийгдэж дууссан">Хийгдэж дууссан</MenuItem>
            <MenuItem value="Хүргэлтэнд гархаар хүлээгдэж байна">
              Хүргэлтэнд гархаар хүлээгдэж байна
            </MenuItem>
            <MenuItem value="Хүргэлтэнд явж байна">
              Хүргэлтэнд явж байна
            </MenuItem>
            <MenuItem value="Хүргэгдсэн">Хүргэгдсэн</MenuItem>
          </Select>
        );
      },
    },
    {
      field: "address",
      headerName: "Хаягийн мэдээлэл",
      width: 200,
      renderCell: (params) => {
        const order = orders.find((order) => order._id === params.id);
        if (!order) return null; // Just in case the order is not found
        return (
          <div className="flex justify-center items-center h-full">
            <AddressDialog
              address={address}
              getAddress={getAddress}
              order={order}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex justify-center items-center gap-10 mx-[250px] my-[150px] w-fit">
      <div style={{ flex: 1, height: 528 }}>
        <h1 className="text-xl font-bold mb-4">Захиалгууд</h1>
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
