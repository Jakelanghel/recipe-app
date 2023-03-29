import React, { useRef } from "react";
import { StyledNewRecipe } from "./NewRecipe.Styled";

const NewRecipe = () => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const cookTimeRef = useRef();
  const ingredientRef = useRef();
  const instructionRef = useRef();

  const getNewRecipeData = (e) => {
    e.preventDefault();
    const recipeName = nameRef.current.value;
    const category = categoryRef.current.value;
    const cookTime = cookTimeRef.current.value;
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const ingredient = ingredientRef.current.value;
    const list = document.querySelector(".ingredients-list");
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("ingredient");
    list.appendChild(item);
    ingredientRef.current.value = "";
  };

  const addInstruction = (e) => {
    e.preventDefault();
    const instruction = instructionRef.current.value;
    const list = document.querySelector(".instruction-list");
    const item = document.createElement("li");
    item.textContent = instruction;
    item.classList.add("instruction");
    list.appendChild(item);
    ingredientRef.current.value = "";
  };

  return (
    <StyledNewRecipe>
      <form action="">
        <label htmlFor="recipeTitle">
          Recipe Name
          <input
            type="text"
            id="recipeTitle"
            placeholder="Enter recipe name..."
            ref={nameRef}
          />
        </label>
        <label htmlFor="category">
          Category
          <input
            type="text"
            id="category"
            placeholder="Enter recipe category..."
            ref={categoryRef}
          />
        </label>
        <label htmlFor="cookTime">
          Cook time
          <input
            type="text"
            id="cookTime"
            placeholder="Cook time..."
            ref={cookTimeRef}
          />
        </label>

        <div className="container-add-to-list">
          <div className="container-flex">
            <label htmlFor="ingredients">
              Ingredients
              <input
                type="text"
                id="ingredients"
                placeholder="List ingredients..."
                ref={ingredientRef}
              />
            </label>
            <button className="add-ingredient-btn" onClick={addIngredient}>
              +
            </button>
          </div>

          <div className="container-flex">
            <ul className="ingredients-list"></ul>
          </div>
        </div>

        <div className="container-add-to-list">
          <div>
            <label htmlFor="instructions">
              Instructions
              <textarea
                type="text"
                id="instructions"
                placeholder="List instructions..."
                ref={instructionRef}
              />
            </label>
            <button onClick={addInstruction}>Add instruction</button>
          </div>

          <div className="container-flex">
            <ol className="instruction-list"></ol>
          </div>
        </div>

        <button onClick={getNewRecipeData}>Add recipe</button>
      </form>
    </StyledNewRecipe>
  );
};

export default NewRecipe;
