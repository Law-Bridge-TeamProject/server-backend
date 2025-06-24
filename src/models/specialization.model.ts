import { Schema, model, Model, models } from "mongoose";

type SpecializationSchemaType = {
  categoryName: string;
  subscription: boolean;
  pricePerHour: number;
};

const SpecializationSchema = new Schema<SpecializationSchemaType>({
  categoryName: { type: String, required: true, unique: true },
  subscription: { type: Boolean, default: false },
  pricePerHour: Number,
});

export const Specialization: Model<SpecializationSchemaType> =
  models["Specialization"] || model("Specialization", SpecializationSchema);
