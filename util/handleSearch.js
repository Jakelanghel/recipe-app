const Recipe = require("../models/Recipe");

const handleSearch = async (searchParam) => {
  try {
    let recipes = await Recipe.find({
      $or: [
        { name: { $regex: searchParam, $options: "i" } },
        { category: { $regex: searchParam, $options: "i" } },
      ],
    });
    return recipes;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

module.exports = { handleSearch };
