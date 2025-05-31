import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectRedis } from "./redis.js"; // Add this import

dotenv.config();

const URL = process.env.MONGODB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
    await connectRedis();
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;