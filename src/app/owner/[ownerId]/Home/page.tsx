"use client";

import { AdminSideBar } from "@/components/AdminSideBoard";
import { AdminBarChart } from "@/components/BarChart";
import { PieChartByCategory } from "@/components/PieChartByCategory";

const Info = () => {
  return (
    <div className="p-4 flex  w-full">
      <div>
        <AdminBarChart />
      </div>
      <div>
        <PieChartByCategory />
      </div>
    </div>
  );
};
export default Info;
