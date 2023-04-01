require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/Recipe");

const jsonRecipes = require("./recipes.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonRecipes);
    console.log("SUCCESS");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
