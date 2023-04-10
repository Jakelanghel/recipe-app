import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledNewRecipe } from "./NewRecipe.Styled";
import BackBtn from "../../shared/back-btn/BackBtn";
import CookTimeInput from "./cook-time-input/CookTimeInput";
import { StyledErrorMsg } from "./error-msg/ErrorMsg.Styled";

import * as utils from "./new-recipe-functions/index";

const NewRecipe = () => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const cookTimeRefHr = useRef();
  const cookTimeRefMin = useRef();
  const ingredientRef = useRef();
  const instructionRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalCookTimeMins = utils.getTotalMins(cookTimeRefHr, cookTimeRefMin);
    const recipeObj = utils.createRecipeObj(
      nameRef,
      categoryRef,
      totalCookTimeMins
    );
    utils.postRecipe(recipeObj, navigate, setError);
  };
  const errorMsg = "name, ingredients, and instructions are required.";

  return (
    <StyledNewRecipe className="new-recipe">
      {error ? <p className="error">{errorMsg}</p> : null}
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

        <CookTimeInput hrsRef={cookTimeRefHr} minsRef={cookTimeRefMin} />

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
            onClick={(e) => utils.addIngredient(e, ingredientRef)}
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
            onClick={(e) => utils.addInstruction(e, instructionRef)}
          >
            Add instruction
          </button>
        </div>

        <div className="container-flex">
          <ol className="instruction-list"></ol>
        </div>

        <button className="submit-btn" onClick={(e) => handleSubmit(e)}>
          Add recipe
        </button>

        <BackBtn className="back-btn" />
      </form>
    </StyledNewRecipe>
  );
};

export default NewRecipe;
