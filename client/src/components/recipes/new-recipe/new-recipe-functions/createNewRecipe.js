export const createNewRecipe = (obj) => {
  const { e, nameRef, categoryRef, cookTimeRefHr, cookTimeRefMin, navigate } =
    obj;
  e.preventDefault();
  let ingredients = document.querySelectorAll(".ingredient");
  let instructions = document.querySelectorAll(".instruction");

  const hrValue = cookTimeRefHr.current.value;
  const minValue = cookTimeRefMin.current.value;

  const hrs = hrValue !== "" ? parseInt(cookTimeRefHr.current.value) : 0;
  const mins = minValue !== "" ? parseInt(cookTimeRefMin.current.value) : 0;

  console.log(hrs);
  console.log(mins);

  const ingredientArr = Array.from(ingredients).map((ing) => ing.textContent);
  const instructionArr = Array.from(instructions).map((ins) => ins.textContent);

  const totalCookTime = hrs * 60 + mins;

  const newRecipe = {
    name: nameRef.current.value,
    category: categoryRef.current.value,
    cookTime: totalCookTime,
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
    .then((data) => navigate("/"))
    .catch((error) => console.error(error));
};
