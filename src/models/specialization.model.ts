import { Schema, model, Model, models, Types } from "mongoose";

type SpecializationSchemaType = {
  name: string;
};

const SpecializationSchema = new Schema<SpecializationSchemaType>({
  name: { type: String, required: true, unique: true },
});

export const Specialization: Model<SpecializationSchemaType> =
  models["Specialization"] || model("Specialization", SpecializationSchema);