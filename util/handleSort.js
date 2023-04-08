const Recipe = require("../models/Recipe");
const { sortByCookTime } = require("./sortByCookTime");
const { getSortCriteria } = require("./getSortCriteria");
const { convertCookTime } = require("./convertCookTime");

const handleSort = async (sortParam) => {
  let recipes;
  const sortCriteria = getSortCriteria(sortParam);
  if (sortCriteria.cookTime) {
    recipes = await Recipe.find({}).lean();
    // If sorting by cookTime convert cookTime string to int and then sort recipes
    recipes = convertCookTime(recipes);
    recipes = sortByCookTime(recipes);
    return recipes;
  } else {
    recipes = await Recipe.find().sort(sortCriteria);
    return recipes;
  }
};

module.exports = { handleSort };
