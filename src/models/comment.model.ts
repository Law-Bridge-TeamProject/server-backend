import { Schema, model, Model, models, Types } from "mongoose";

type CommentSchemaType = {
  post: Types.ObjectId; 
  author: string; 
    content: string; 
    createdAt?: Date;
};

const CommentSchema = new Schema<CommentSchemaType>({
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },{timestamps: true});
  
  export const Comment: Model<CommentSchemaType> =
    models["Comment"] || model("Comment", CommentSchema);