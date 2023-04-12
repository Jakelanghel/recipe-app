const asyncWrapper = require("../middleware/async-wrapper");

const createRecipe = asyncWrapper(async (req, res) => {
  const recipe = await Recipe.create(req.body);
  res.status(200).json({ recipe });
});

module.exports = createRecipe;
