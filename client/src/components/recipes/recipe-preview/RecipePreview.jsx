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
    console.log("X");
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

  return (
    <StyledRecipePreview>
      <img src={favImg} alt="" onClick={handleFavoriteClick} />
      <p className="name">{name}</p>
      <p className="category">{category}</p>
      <p className="cook-time">{cookTimeString}</p>

      <p className="ingredients">{ingredients[0]}</p>
      <p className="ingredients">{ingredients[1]}</p>
      <p className="ingredients">{ingredients[2]}</p>

      <div className="container-actions">
        <button onClick={showFullRecipe}>see full recipe</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </StyledRecipePreview>
  );
};

export default RecipePreview;
