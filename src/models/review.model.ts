import { Schema, model, Model, models, Types } from "mongoose";

type ReviewSchemaType = {
  clientId: string;
  lawyerId: Types.ObjectId; 
  rating: number; 
  comment?: string; 
};

const ReviewSchema = new Schema({
    clientId: { type: String, required: true },
    lawyerId: { type: Schema.Types.ObjectId, ref: 'Lawyer' },
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
  },{timestamps: true});
  
  export const Review: Model<ReviewSchemaType> =
    models["Review"] || model("Review", ReviewSchema);