const express = require("express");
const router = express.Router();

const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipes");

router.route("/").get(getAllRecipes).post(createRecipe);
router.route("/:id").get(getRecipe).patch(updateRecipe).delete(deleteRecipe);

module.exports = router;
