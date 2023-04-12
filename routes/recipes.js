const express = require("express");
const router = express.Router();

const {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getFavoriteRecipes,
  getRecipe,
  updateFavorite,
  updateRecipe,
} = require("../controllers/controllers");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/favorites").get(getFavoriteRecipes);
router.route("/:id").get(getRecipe).patch(updateRecipe).delete(deleteRecipe);
router.route("/:id/favorite").patch(updateFavorite);
module.exports = router;
