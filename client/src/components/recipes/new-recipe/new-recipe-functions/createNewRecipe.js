export const createNewRecipe = (e, nameRef, categoryRef, cookTimeRef) => {
  e.preventDefault();
  let ingredients = document.querySelectorAll(".ingredient");
  let instructions = document.querySelectorAll(".instruction");

  const ingredientArr = Array.from(ingredients).map((ing) => ing.textContent);
  const instructionArr = Array.from(instructions).map((ins) => ins.textContent);

  const newRecipe = {
    name: nameRef.current.value,
    category: categoryRef.current.value,
    cookTime: cookTimeRef.current.value,
    ingredients: ingredientArr,
    instructions: instructionArr,
  };

  fetch("/api/v1/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
