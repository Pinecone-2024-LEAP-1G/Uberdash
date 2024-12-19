import { OrderItemModel } from "@/lib/models";
import { connectToMongoDB } from "@/lib/db";

connectToMongoDB();

export const GET = async () => {
  try {
    const mostOrderedItems = await OrderItemModel.aggregate([
      {
        $group: {
          _id: "$menuItem", // Group by menuItem
          totalQuantity: { $sum: "$quantity" }, // Sum up the quantities
        },
      },
      {
        $sort: { totalQuantity: -1 },
      },
    ]);

    const populatedItems = await OrderItemModel.populate(mostOrderedItems, {
      path: "_id",
      model: "menu-items",
    });

    return Response.json({ mostOrderedItems: populatedItems });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
};
