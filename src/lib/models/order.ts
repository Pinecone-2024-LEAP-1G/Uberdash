import mongoose, { Schema } from "mongoose";

export type Order = {
  id: Schema.Types.ObjectId;
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
    required: true,
  },
  priceWithoutDiscount: {
    type: Number,
    required: true,
  },
  priceWithDiscount: {
    type: Number,
    required: true,
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
    ref: "discount-code",
  },
  deliveryAddressId: {
    type: Schema.Types.ObjectId,
    ref: "delivery-address",
  },
});

const OrderModel = mongoose.model<Order>("order", OrderSchema);
export default OrderModel;
