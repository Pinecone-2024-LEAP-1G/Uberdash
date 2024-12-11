import {
  BadgeDollarSign,
  ChartBarStacked,
  Info,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const ownerId: string = "673e90415a6e8e222657bbb4";

export const AdminSideBoard = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={`/owner/${ownerId}/Info`}>
        <div className="w-40 flex gap-3 bg-white px-3 hover:bg-slate-300 py-2">
          <Info />
          <p> Info </p>
        </div>
      </Link>
      <Link href={`/owner/${ownerId}/Orders`}>
        <div className="w-40 flex gap-3 bg-white px-3 hover:bg-slate-300 py-2">
          <BadgeDollarSign />
          <p> Orders </p>
        </div>
      </Link>
      <Link href={`/owner/${ownerId}/Categories`}>
        <div className="w-40 flex gap-3 bg-white px-3 hover:bg-slate-300 py-2">
          <ChartBarStacked />
          <p>Categories</p>
        </div>
      </Link>
      <Link href={`/owner/${ownerId}/Reviews`}>
        <div className="w-40 flex gap-3 bg-white px-3 hover:bg-slate-300 py-2">
          <MessageSquare />
          <p> Reviews </p>
        </div>
      </Link>
      <Link href={`/owner/${ownerId}/Products`}>
        <div className="w-40 flex gap-3 bg-white px-3 hover:bg-slate-300 py-2">
          <LayoutDashboard />
          <p> Products </p>
        </div>
      </Link>
    </div>
  );
};
