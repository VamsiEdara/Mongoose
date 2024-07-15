import mongoose from "mongoose";
// DATABASE_URL should be set in .env file
const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
