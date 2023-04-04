export const createRecipeObj = (nameRef, categoryRef, totalCookTimeMins) => {
  let ingredients = document.querySelectorAll(".ingredient");
  let instructions = document.querySelectorAll(".instruction");

  const ingredientArr = Array.from(ingredients).map((ing) => ing.textContent);
  const instructionArr = Array.from(instructions).map((ins) => ins.textContent);
  const newRecipe = {
    name: nameRef.current.value,
    category: categoryRef.current.value,
    cookTime: totalCookTimeMins,
    ingredients: ingredientArr,
    instructions: instructionArr,
  };
  return newRecipe;
};
