import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const connectDatabase = async () => {
  const url = process.env.MONGODB_CONNECTION_URL;

  if (!url) throw new Error("MONGODB_CONNECTION_URL not found");

  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
