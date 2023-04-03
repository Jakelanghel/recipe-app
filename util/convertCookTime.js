const convertCookTime = (recipes) => {
  return recipes.map((recipe) => {
    return {
      ...recipe,
      cookTime: parseInt(recipe.cookTime),
    };
  });
};

module.exports = { convertCookTime };
