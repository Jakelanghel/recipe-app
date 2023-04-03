import React, { useRef } from "react";
import { StyledNewRecipe } from "./NewRecipe.Styled";
import { addIngredient } from "./new-recipe-functions/addIngredient";
import { addInstruction } from "./new-recipe-functions/addInstruction";
import { createNewRecipe } from "./new-recipe-functions/createNewRecipe";
import BackBtn from "../../shared/back-btn/BackBtn";

import { useNavigate } from "react-router-dom";

const NewRecipe = () => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const cookTimeRef = useRef();
  const ingredientRef = useRef();
  const instructionRef = useRef();
  const navigate = useNavigate();

  return (
    <StyledNewRecipe>
      <form action="">
        <label htmlFor="recipeTitle">Recipe Name</label>
        <input
          type="text"
          id="recipeTitle"
          placeholder="Enter recipe name..."
          ref={nameRef}
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          placeholder="Enter recipe category..."
          ref={categoryRef}
        />

        <label htmlFor="cookTime">Cook time</label>
        <input
          type="text"
          id="cookTime"
          placeholder="Cook time..."
          ref={cookTimeRef}
        />

        <label htmlFor="ingredients">Ingredients</label>
        <div className="container-flex">
          <input
            type="text"
            id="ingredients"
            placeholder="Add ingredient..."
            ref={ingredientRef}
          />
          <button
            className="ingredient-btn"
            onClick={(e) => addIngredient(e, ingredientRef)}
          >
            Add
          </button>
        </div>

        <div className="container-flex">
          <ul className="ingredients-list"></ul>
        </div>

        <label htmlFor="instructions">Instructions</label>
        <div>
          <textarea
            type="text"
            id="instructions"
            placeholder="Add instruction..."
            ref={instructionRef}
            className="instructions-input"
          />
          <button
            className="instruction-btn"
            onClick={(e) => addInstruction(e, instructionRef)}
          >
            Add instruction
          </button>
        </div>

        <div className="container-flex">
          <ol className="instruction-list"></ol>
        </div>

        <button
          className="submit-btn"
          onClick={(e) =>
            createNewRecipe(e, nameRef, categoryRef, cookTimeRef, navigate)
          }
        >
          Add recipe
        </button>

        <BackBtn />
      </form>
    </StyledNewRecipe>
  );
};

export default NewRecipe;
