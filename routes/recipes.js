const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  updateFavorite,
  getFavoriteRecipes,
  SearchRecipes,
} = require("../controllers/recipes");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/favorites").get(getFavoriteRecipes);
router.route("/:id").get(getRecipe).patch(updateRecipe).delete(deleteRecipe);
router.route("/:id/favorite").patch(updateFavorite);
module.exports = router;
