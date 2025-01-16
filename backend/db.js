import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = "mongodb+srv://codebusters:phP18F3eKhdfVmWQ@cluster0.o1bkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
