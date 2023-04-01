export const addIngredient = (e, ingredientRef) => {
  e.preventDefault();
  const ingredient = ingredientRef.current.value;
  if (!ingredient) return;
  const list = document.querySelector(".ingredients-list");
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("ingredient");
  list.appendChild(item);
  ingredientRef.current.value = "";
};
