import { Schema, model, Model, models, Types } from "mongoose";

type LawyerSchemaType = {
  lawyerId: string;                  
  firstName: string;
  lastName: string;
  email: string;
  licenseNumber: string;
  bio?: string;
  specialization?: Types.ObjectId[]; 
  experience?: string;
  rating?: number;
  profilePicture?: string;
  achievements?: Types.ObjectId[];
};

const LawyerSchema = new Schema<LawyerSchemaType>(
  {
    lawyerId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    licenseNumber: { type: String, required: true, unique: true },
    bio: { type: String },
    specialization: [{ type: Schema.Types.ObjectId, ref: "Specialization" }],
    experience: { type: String },
    rating: { type: Number, default: 0 },
    profilePicture: { type: String },
    achievements: [{ type: Schema.Types.ObjectId, ref: "Achievement" }],
  },
  { timestamps: true }
);

export const Lawyer: Model<LawyerSchemaType> =
  models["Lawyer"] || model("Lawyer", LawyerSchema);
