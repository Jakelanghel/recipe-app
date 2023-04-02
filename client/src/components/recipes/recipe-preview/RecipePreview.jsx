import React from "react";
import { StyledRecipePreview } from "./RecipePreview.Styled";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";

const RecipePreview = (props) => {
  const { name, category, ingredients, id } = props;
  const navigate = useNavigate();
  const { setSingleRecipeID } = React.useContext(Context);

  const handleClick = () => {
    localStorage.setItem("recipeId", id);
    setSingleRecipeID(id);
    navigate("/single-recipe");
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
