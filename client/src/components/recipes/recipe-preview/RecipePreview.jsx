import React from "react";
import { StyledRecipePreview } from "./RecipePreview.Styled";

const RecipePreview = (props) => {
  const { name, category, ingredients, id } = props;

  const handleClick = () => {
    console.log("OPEN RECIPE");
  };
  return (
    <StyledRecipePreview onClick={handleClick}>
      <p className="name">{name}</p>
      <p className="category">{category}</p>
      <p className="ingredients">{ingredients[0]}</p>
      <p className="ingredients">{ingredients[1]}</p>
      <p className="ingredients">{ingredients[2]}</p>
    </StyledRecipePreview>
  );
};

export default RecipePreview;
