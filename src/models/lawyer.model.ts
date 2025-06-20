import { Schema, model, Model, models, Types } from "mongoose";

type LawyerSchemaType = {
  clerkUserId: string;
  bio?: string;
  specialization?: string[];
  experience?: string;
  verified?: boolean;
  rating?: number;
  achievements?: Types.ObjectId[]; 
};

const LawyerSchema = new Schema<LawyerSchemaType>(
  {
    clerkUserId: { type: String, required: true, unique: true }, // Clerk user ID
    bio: String,
    specialization: [{ type: Schema.Types.ObjectId, ref: "Specialization" }],
    experience: String,
    verified: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
  },
  { timestamps: true }
);

export const Lawyer: Model<LawyerSchemaType> =
models["Lawyer"] || model("Lawyer", LawyerSchema);