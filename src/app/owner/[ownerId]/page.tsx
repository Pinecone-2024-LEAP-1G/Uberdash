import { DataGridView } from "@/components/DataGridView";
import { AdminSideBoard } from "@/components/AdminSideBoard";

export default async function Page({
  params,
}: {
  params: Promise<{ ownerId: string }>;
}) {
  const restaurantOwnerId = (await params)?.ownerId;

  return (
    <div className="flex gap-4">
      <AdminSideBoard />
      <DataGridView restaurantOwnerId={restaurantOwnerId} />
    </div>
  );
}
