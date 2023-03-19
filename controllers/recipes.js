const getAllRecipes = (req, res) => {
  res.send("GET ALL RECIPES");
};
const getRecipe = (req, res) => {
  res.send("GET SINGLE RECIPES");
};
const createRecipe = (req, res) => {
  res.send("CREATE RECIPE");
};
const updateRecipe = (req, res) => {
  res.send("UPDATE RECIPE");
};
const deleteRecipe = (req, res) => {
  res.send("DELETE RECIPE");
};

module.exports = {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
