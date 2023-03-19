const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipes");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware
app.use(express.json());
// routes
app.use("/api/v1/recipes", recipesRoutes);
// port
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
