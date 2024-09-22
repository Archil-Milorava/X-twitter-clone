import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error from connectDB", error);
    process.exit(1);
  }
};

export default connectDB;
