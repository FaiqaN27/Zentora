import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("MongoDB Connected!");
      }
    );
  } catch (err) {
    console.log("Database Connection Error: ", err.message);
  }
};

export default connectDB;
