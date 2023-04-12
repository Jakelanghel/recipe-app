const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const updateRecipe = asyncWrapper(async (req, res, next) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOneAndUpdate({ _id: recipeID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!recipe) {
    return next(createCustomError(`No recipe with the id ${recipeID}`));
  }
  res.status(200).json({ recipe });
});

module.exports = updateRecipe;
