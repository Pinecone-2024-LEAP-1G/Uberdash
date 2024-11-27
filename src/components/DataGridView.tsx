import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

type Restaurant = {
  _id: string;
  name: string;
  image: string;
  banner: string;
  info: string;
  rating: number;
  ownerId: string;
};

type MenuItem = {
  _id: string;
  name: string;
  description: string;
  size: string;
  price: number;
  available: boolean;
  categoryId: string;
};

const rows: GridRowsProp = [
  { id: 1, col1: "Hello", col2: "World" },
  { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  { id: 3, col1: "MUI", col2: "is Amazing" },
];

const columns: GridColDef[] = [
  { field: "col1", headerName: "Column 1", width: 150 },
  { field: "col2", headerName: "Column 2", width: 150 },
];

type DataGridViewProps = {
  restaurantOwnerId: string;
};
export function DataGridView({ restaurantOwnerId }: DataGridViewProps) {
  const [restaurant, setRestaurant] = useState<Restaurant>();

  const [menuItems, setMenuItems] = useState<MenuItem>();
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/restaurant/getByOwnerId", {
        ownerId: restaurantOwnerId,
      })
      .then(function (response) {
        setRestaurant(response.data.restaurant);
        setMenuItems(response.data.menuItems);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
