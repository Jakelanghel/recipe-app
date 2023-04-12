const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");
const { handleSearch } = require("../util/handleSearch");
const { handleSort } = require("../util/handleSort");

const getAllRecipes = asyncWrapper(async (req, res, next) => {
  const sortParam = req.query.sort;
  const searchParam = req.query.search;

  let recipes;

  if (sortParam) {
    recipes = await handleSort(sortParam);
  } else if (searchParam) {
    recipes = await handleSearch(searchParam);
  } else {
    // No sort parameter, or search parameter, return all recipes
    recipes = await Recipe.find({});
  }
  if (!recipes) {
    return next(createCustomError(`No recipes found`));
  }
  res.status(200).json({ success: true, data: recipes });
});

module.exports = getAllRecipes;
