import app from "./index.js";
import connectDB from "./db/connectDb.js";

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
