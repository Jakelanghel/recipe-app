import React, { useState } from "react";
import { StyledRecipePreview } from "./RecipePreview.Styled";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import { images } from "../../../constants/images";
import { deleteRecipe } from "../recipe-utils/deleteRecipe";
import { formatCookTime } from "../recipe-utils/formatCookTime";

const RecipePreview = (props) => {
  const { name, category, ingredients, id, fav, cookTime } = props;
  const navigate = useNavigate();
  const { setSingleRecipeID, setRecipeData } = React.useContext(Context);

  const [isFav, setIsFav] = useState(fav);

  const showFullRecipe = () => {
    localStorage.setItem("recipeId", id);
    setSingleRecipeID(id);
    navigate("/single-recipe");
  };

  const handleDelete = () => {
    deleteRecipe(id, setRecipeData);
  };

  const handleFavoriteClick = async () => {
    try {
      const response = await fetch(`/api/v1/recipes/${id}/favorite`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: !isFav }),
      });
      const updatedRecipe = await response.json();
      setIsFav(updatedRecipe.favorite);
    } catch (error) {
      console.error("Failed to update recipe favorite", error);
    }
  };

  const favImg = isFav ? images.favIconSolid : images.favIconEmpty;
  const cookTimeString = formatCookTime(cookTime);

  const ingredientElements = ingredients.map((ingredient, i) => (
    <p key={i} className="ingredients">
      - {ingredient}
    </p>
  ));

  return (
    <StyledRecipePreview>
      <img src={favImg} alt="" onClick={handleFavoriteClick} />
      <h2 className="name">{name}</h2>

      <div className="container-details">
        <p className="category">
          <span>Category</span> {category}
        </p>
        <p className="cook-time">
          <span>Cook time</span> {cookTimeString}
        </p>
      </div>

      <div className="container-ingredients">
        <h3>Ingredients</h3>
        {ingredientElements}
      </div>

      <div className="container-actions">
        <button onClick={showFullRecipe}> full recipe</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </StyledRecipePreview>
  );
};

export default RecipePreview;
