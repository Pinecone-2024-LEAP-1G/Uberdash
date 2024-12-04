"use client";

import { AdminSideBoard } from "@/components/AdminSideBoard";
import { useState, useEffect } from "react";

const restaurantOwnerId: String = "673e90415a6e8e222657bbb4";

const Info = () => {
  useEffect(() => {}, []);

  return (
    <div className="p-4 flex gap-3 w-full">
      <AdminSideBoard />
      <div className=""> </div>
    </div>
  );
};
export default Info;
