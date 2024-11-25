import mongoose from "mongoose";
const URL =
  "mongodb+srv://codebusters:8dDr5tUefuOAcrMl@cluster0.snioh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
export const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
