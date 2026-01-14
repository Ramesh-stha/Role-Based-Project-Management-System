import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI ;

if (!MONGODB_URI) {
  throw new Error("Mongodb connection string error");
}

export async function ConnectDB() {
  try {
    await mongoose.connect(MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default ConnectDB;