const cookTimeParseString = (recipes) => {
  return recipes.map((recipe) => {
    // console.log(recipe.cookTime);

    const hours = Math.floor(recipe.cookTime / 60);
    const minutes = recipe.cookTime % 60;
    const hoursString = hours > 0 ? `${hours}hr` : "";
    const minutesString = minutes > 0 ? `${minutes}min` : "";
    return { ...recipe, cookTime: `${hoursString} ${minutesString}`.trim() };
  });
};

module.exports = { cookTimeParseString };
