import { Schema, model, Model, models, Types } from "mongoose";

type ReviewSchemaType = {
  clientClerkId: string;
  lawyerId: Types.ObjectId; 
  rating: number; 
  comment?: string; 
  createdAt?: Date;
};

const ReviewSchema = new Schema({
    clientClerkId: { type: String, required: true },
    lawyerId: { type: Schema.Types.ObjectId, ref: 'Lawyer' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    createdAt: { type: Date, default: Date.now }
  },{timestamps: true});
  
  export const Review: Model<ReviewSchemaType> =
    models["Review"] || model("Review", ReviewSchema);