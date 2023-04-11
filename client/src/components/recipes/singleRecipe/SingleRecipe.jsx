import React, { useState, useEffect } from "react";
import { Context } from "../../../Context";
import { StyledSingleRecipe } from "./SingleRecipe.Styled";
import { formatCookTime } from "../recipe-utils/formatCookTime";
import { createIngredientsArr } from "./utils/createIngredientsArr";
import { createInstructionsArr } from "./utils/createInstructionsArr";
import BackBtn from "../../shared/back-btn/BackBtn";

const SingleRecipe = () => {
  const { singleRecipeID } = React.useContext(Context);
  const [data, setData] = useState(null);
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

  return data ? (
    <main className="pg-padding">
      <StyledSingleRecipe>
        <header>
          <h1>{data.name}</h1>
          <div className="container-details">
            <p className="category">
              <span>category:</span> {data.category}
            </p>
            <p>
              <span>cook time:</span> {formatCookTime(data.cookTime)}
            </p>
          </div>
        </header>

        <div className="container-ingredients">
          <h2>ingredients</h2>
          <ul className="instructions">{createIngredientsArr(data)}</ul>
        </div>

        <div className="container-instructions">
          <h2>instructions</h2>
          <ol className="ingredients">{createInstructionsArr(data)}</ol>
        </div>

        <BackBtn />
      </StyledSingleRecipe>
    </main>
  ) : (
    <main>
      <h1 className="pg-padding">loading...</h1>
    </main>
  );
};

export default SingleRecipe;
