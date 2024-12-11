import { models, Schema, model } from "mongoose";

export type Order = {
  _id: Schema.Types.ObjectId;
  status:
    | "Pending"
    | "Cancelled"
    | "ReadyToStart"
    | "InPreparation"
    | "ReadyForPickup"
    | "OnTheWay"
    | "Delivered";
  orderItemCount: number;
  priceWithoutDiscount: number;
  priceWithDiscount: number;
  userId: Schema.Types.ObjectId;
  cancelledTime?: Date;
  readyToStartTime?: Date;
  inPreparationTime?: Date;
  readyForPickupTime?: Date;
  onTheWayTime?: Date;
  deliveredTime?: Date;
  discountCodeId?: Schema.Types.ObjectId;
  deliveryAddressId?: Schema.Types.ObjectId;
  orderItems: Schema.Types.ObjectId[];
};

const OrderSchema = new Schema<Order>({
  status: {
    type: String,
    required: true,
    enum: [
      "Pending",
      "Cancelled",
      "ReadyToStart",
      "InPreparation",
      "ReadyForPickup",
      "OnTheWay",
      "Delivered",
    ],
    default: "Pending",
  },
  orderItemCount: {
    type: Number,
  },
  priceWithoutDiscount: {
    type: Number,
  },
  priceWithDiscount: {
    type: Number,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  cancelledTime: Date,
  readyToStartTime: Date,
  inPreparationTime: Date,
  readyForPickupTime: Date,
  onTheWayTime: Date,
  deliveredTime: Date,
  discountCodeId: {
    type: Schema.Types.ObjectId,
    ref: "discounts",
  },
  deliveryAddressId: {
    type: Schema.Types.ObjectId,
    ref: "addresses",
  },
  orderItems: [{ type: Schema.Types.ObjectId, ref: "order-items" }],
});

const OrderModel = models.orders || model<Order>("orders", OrderSchema);
export default OrderModel;
