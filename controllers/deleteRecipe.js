const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const deleteRecipe = asyncWrapper(async (req, res, next) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOneAndDelete({ _id: recipeID });
  if (!recipe) {
    return next(createCustomError(`No recipe with the id ${recipeID}`));
  }
  res.status(200).json({ recipe });
});

module.exports = deleteRecipe;
