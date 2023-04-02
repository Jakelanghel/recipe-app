import React, { useState, useEffect } from "react";
import { StyledSingleRecipe } from "./SingleRecipe.Styled";
import { Context } from "../../../Context";

const SingleRecipe = () => {
  const { singleRecipeID } = React.useContext(Context);
  const [data, setData] = useState(null);
  //   const ID = singleRecipeID ? singleRecipeID : localStorage.getItem("recipeID");
  const recipeID = singleRecipeID
    ? singleRecipeID
    : localStorage.getItem("recipeId");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/api/v1/recipes/${recipeID}`);
        const data = await response.json();
        setData(data.recipe);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, []);

  const ingredients = data
    ? data.ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
    : null;

  const instructions = data
    ? data.instructions.map((instruction, i) => <li key={i}>{instruction}</li>)
    : null;

  return data ? (
    <StyledSingleRecipe>
      <header>
        <h1>{data.name}</h1>
        <p>{data.category}</p>
        <p>{data.cookTime}</p>
      </header>

      <div className="container-ingredients">
        <h2>ingredients</h2>
        <ul>{ingredients}</ul>
      </div>

      <div className="container-instructions">
        <h2>instructions</h2>
        <ol>{instructions}</ol>
      </div>
    </StyledSingleRecipe>
  ) : (
    <h1>loading...</h1>
  );
};

export default SingleRecipe;
