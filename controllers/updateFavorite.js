const Recipe = require("../models/Recipe");
const asyncWrapper = require("../middleware/async-wrapper");

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

module.exports = updateFavorite;
