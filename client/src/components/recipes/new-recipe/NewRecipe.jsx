import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledNewRecipe } from "./NewRecipe.Styled";
import BackBtn from "../../shared/back-btn/BackBtn";
import CookTimeInput from "./cook-time-input/CookTimeInput";
import { StyledErrorMsg } from "./error-msg/ErrorMsg.Styled";

import * as utils from "./new-recipe-utils/index";

const NewRecipe = () => {
  const nameRef = useRef();
  const categoryRef = useRef();
  const cookTimeRefHr = useRef();
  const cookTimeRefMin = useRef();
  const ingredientRef = useRef();
  const instructionRef = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  const addIngredient = (e) => {
    e.preventDefault();
    setIngredients((oldState) => [...oldState, ingredientRef.current.value]);
  };

  const addInstruction = (e) => {
    e.preventDefault();
    setInstructions((oldState) => [...oldState, instructionRef.current.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalCookTimeMins = utils.getTotalMins(cookTimeRefHr, cookTimeRefMin);
    console.log(ingredients);
    console.log(instructions);
    const newRecipe = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      cookTime: totalCookTimeMins,
      ingredients: ingredients,
      instructions: instructions,
    };
    utils.postRecipe(newRecipe, navigate, setError);
  };

  const ingredientElements = ingredients.map((ingredient, i) => (
    <li key={i}>{ingredient}</li>
  ));

  const instructionElements = instructions.map((instruction, i) => (
    <li key={i}>{instruction}</li>
  ));

  const errorMsg = "name, ingredients, and instructions are required.";

  return (
    <main className="pg-padding">
      <StyledNewRecipe>
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
          <div className="container-flex ingredients">
            <input
              type="text"
              id="ingredients"
              placeholder="Add ingredient..."
              ref={ingredientRef}
            />
            <button className="ingredient-btn" onClick={addIngredient}>
              Add
            </button>
          </div>

          <div className="container-flex">
            <ul className="ingredients-list">{ingredientElements}</ul>
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
            <button className="instruction-btn" onClick={addInstruction}>
              Add instruction
            </button>
          </div>

          <div className="container-flex">
            <ol className="instruction-list">{instructionElements}</ol>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Add recipe
          </button>

          <BackBtn className="back-btn" />
        </form>
      </StyledNewRecipe>
    </main>
  );
};

export default NewRecipe;
