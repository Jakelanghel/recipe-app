const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/asyncWrapper");

const createRecipe = asyncWrapper(async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.status(200).json({ recipe });
});

const getAllRecipes = asyncWrapper(async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(200).json({ recipes });
});

const getRecipe = asyncWrapper(async (req, res) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOne({ _id: recipeID });
  res.status(200).json({ recipe });
});

const updateRecipe = asyncWrapper(async (req, res) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOneAndUpdate({ _id: recipeID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!recipe) {
    return res.status(404).json({ mgs: `No recipe with ID: ${recipeID}` });
  }
  res.status(200).json({ recipe });
});

const deleteRecipe = asyncWrapper(async (req, res) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOneAndDelete({ _id: recipeID });
  if (!recipe) {
    return res.status(404).json({ mgs: `No recipe with ID: ${recipeID}` });
  }
  res.status(200).json({ recipe });
});

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
asyncWrapper(async () => {});
