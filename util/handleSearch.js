const Recipe = require("../models/Recipe");

const handleSearch = async (searchParam) => {
  let recipes = await Recipe.find({
    $or: [
      { name: { $regex: searchParam, $options: "i" } },
      { category: { $regex: searchParam, $options: "i" } },
    ],
  });
  return recipes;
};

module.exports = { handleSearch };
