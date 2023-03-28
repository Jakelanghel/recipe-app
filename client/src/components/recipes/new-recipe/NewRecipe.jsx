import React from "react";
import { StyledNewRecipe } from "./NewRecipe.Styled";

const NewRecipe = () => {
  return (
    <StyledNewRecipe>
      <form action="">
        <label htmlFor="recipeTitle">
          Recipe Name
          <input type="text" id="recipeTitle" placeholder="Enter recipe name" />
        </label>
        <label htmlFor="category">
          Category
          <input type="text" id="category" placeholder="Enter recipe name" />
        </label>
        <label htmlFor="cookTime">
          Cook time
          <input type="text" id="cookTime" placeholder="Cook time" />
        </label>

        <div className="container-add-to-list">
          <div className="container-flex">
            <label htmlFor="ingredients">
              Ingredients
              <input
                type="text"
                id="ingredients"
                placeholder="List ingredients"
              />
            </label>
            <button>Add Ingredient</button>
          </div>

          <div className="container-flex">
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
        </div>

        <div className="container-add-to-list">
          <div>
            <label htmlFor="instructions">
              Instructions
              <textarea
                type="text"
                id="instructions"
                placeholder="List instructions"
              />
            </label>
            <button>Add instruction</button>
          </div>

          <div className="container-flex">
            <ol>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </div>
        </div>

        {/* <button>Add recipe</button> */}
      </form>
    </StyledNewRecipe>
  );
};

export default NewRecipe;
