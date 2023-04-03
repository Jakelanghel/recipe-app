const sortRecipes = (recipes) => {
  return recipes.sort((recipe1, recipe2) => {
    const cookTime1 = recipe1.cookTime;
    const cookTime2 = recipe2.cookTime;
    return cookTime1 - cookTime2;
  });
};

module.exports = { sortRecipes };
