const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const getRecipe = asyncWrapper(async (req, res, next) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOne({ _id: recipeID });
  if (!recipe) {
    return next(createCustomError(`No recipe with the id ${recipeID}`));
  }
  res.status(200).json({ recipe });
});

module.exports = getRecipe;
