// Import the required modules
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// Connect to the database

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error araha: ", error);
    process.exit(1);
  }
};

export default connectDB;
