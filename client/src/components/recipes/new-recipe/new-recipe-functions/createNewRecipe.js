export const createNewRecipe = (e, nameRef, categoryRef, cookTimeRef) => {
  e.preventDefault();
  let ingredients = document.querySelectorAll(".ingredient");
  let instructions = document.querySelectorAll(".instruction");

  const ingredientArr = Array.from(ingredients).map((ing) => ing.textContent);
  const instructionArr = Array.from(instructions).map((ins) => ins.textContent);

  const newRecipe = {
    name: nameRef,
    category: categoryRef,
    cookTime: cookTimeRef,
    ingredients: ingredientArr,
    instructions: instructionArr,
  };
};
