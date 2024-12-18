"use client";

import { AdminBarChart } from "@/components/BarChart";
import { PieChartByCategory } from "@/components/PieChartByCategory";

const Info = () => {
  return (
    <div className="p-4 flex w-full ml-72">
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
        <AdminBarChart />
        <PieChartByCategory />
      </div>
    </div>
  );
};

export default Info;
