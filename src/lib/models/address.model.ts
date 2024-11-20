import { Model, Schema, models, model } from "mongoose";

type Address = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  entranceNumber: string;
  appartmentNumber: string;
};

const AddressmeSchema = new Schema<Address>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  street: { type: String, required: true },
  houseNumber: { type: String, required: true },
  entranceNumber: { type: String, required: true },
  appartmentNumber: { type: String, required: true },
});

export const AddressModel: Model<Address> =
  models.addresses || model<Address>("addresses", AddressmeSchema);
