import mongoose, { Schema } from "mongoose";

export type Order = {
  id: Schema.Types.ObjectId;
  status: string;
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
  id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
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
    ref: "user",
  },
  cancelledTime: {
    type: Date,
  },
  readyToStartTime: {
    type: Date,
  },
  inPreparationTime: {
    type: Date,
  },
  readyForPickupTime: {
    type: Date,
  },
  onTheWayTime: {
    type: Date,
  },
  deliveredTime: {
    type: Date,
  },
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
