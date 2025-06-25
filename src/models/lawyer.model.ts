import { Schema, model, Model, models, Types } from "mongoose";

type LawyerSchemaType = {
  lawyerId: string;
  firstName: string;
  lastName: string;
  email: string;
  licenseNumber: string;
  bio?: string;
  specialization?: string[];
  experience?: string;
  rating?: number;
  profilePicture: string;
  achievements?: Types.ObjectId[];
};

const LawyerSchema = new Schema<LawyerSchemaType>(
  {
    lawyerId: { type: String, required: true, unique: true },
    firstName: String,
    lastName: String,
    email: String,
    licenseNumber: String,
    bio: String,
    specialization: [{ type: Schema.Types.ObjectId, ref: "Specialization" }],
    experience: String,
    rating: { type: Number, default: 0 },
    profilePicture: String,
    achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
  },
  { timestamps: true }
);

export const Lawyer: Model<LawyerSchemaType> =
  models["Lawyer"] || model("Lawyer", LawyerSchema);
