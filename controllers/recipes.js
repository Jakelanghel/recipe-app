const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/async-wrapper");
const { createCustomError } = require("../errors/custom-error");

const { getSortCriteria } = require("../util/getSortCriteria");

const getAllRecipes = asyncWrapper(async (req, res, next) => {
  const sortParam = req.query.sort;
  let recipes;

  if (sortParam) {
    const sortCriteria = getSortCriteria(sortParam);
    console.log(sortCriteria);
    recipes = await Recipe.find().sort(sortCriteria);
  } else {
    // No sort parameter, return all recipes
    recipes = await Recipe.find({});
  }

  if (!recipes) {
    return next(createCustomError(`No recipes found`));
  }

  res.status(200).json({ success: true, data: recipes });
});

const getRecipe = asyncWrapper(async (req, res, next) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOne({ _id: recipeID });
  if (!recipe) {
    return next(createCustomError(`No recipe with the id ${recipeID}`));
  }
  res.status(200).json({ recipe });
});

const getFavoriteRecipes = asyncWrapper(async (req, res, next) => {
  const recipes = await Recipe.find({ favorite: true });
  if (!recipes) {
    return next(createCustomError(`No recipes have been favorited`));
  }
  res.status(200).json({ recipes });
});

const createRecipe = asyncWrapper(async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.status(200).json({ recipe });
});

const updateRecipe = asyncWrapper(async (req, res) => {
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

const updateFavorite = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      id,
      { favorite },
      { new: true }
    );
    res.status(200).json({ ...recipe.toJSON(), favorite });
  } catch (error) {
    res.status(500).json({ error: "Failed to update recipe" });
  }
});

const deleteRecipe = asyncWrapper(async (req, res) => {
  const { id: recipeID } = req.params;
  const recipe = await Recipe.findOneAndDelete({ _id: recipeID });
  if (!recipe) {
    return next(createCustomError(`No recipe with the id ${recipeID}`));
  }
  res.status(200).json({ recipe });
});

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  updateFavorite,
  getFavoriteRecipes,
};
