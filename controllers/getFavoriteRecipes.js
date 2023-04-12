const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const getFavoriteRecipes = asyncWrapper(async (req, res, next) => {
  const recipes = await Recipe.find({ favorite: true });
  if (!recipes) {
    return next(createCustomError(`No recipes have been favorited`));
  }
  res.status(200).json({ recipes });
});

module.exports = getFavoriteRecipes;
