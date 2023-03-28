const express = require("express");
const app = express();
const recipesRoutes = require("./routes/recipes");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/recipes", recipesRoutes);

app.use(notFound);
app.use(errorHandlerMiddleware);
// port
const port = process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
