import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    return console.log("MongoDb connects successfully.");
  } catch (err) {
    console.error("Database connection failed", err.message);
    process.exit(1); // stops server if connection fails
  }
};

export default connectDb;
