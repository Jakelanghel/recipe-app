import React, { useState } from "react";
import { StyledRecipePreview } from "./RecipePreview.Styled";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import { images } from "../../../constants/images";

const RecipePreview = (props) => {
  const { name, category, ingredients, id, fav } = props;
  const navigate = useNavigate();
  const { setSingleRecipeID } = React.useContext(Context);

  const [isFav, setIsFav] = useState(fav);

  const showFullRecipe = () => {
    localStorage.setItem("recipeId", id);
    setSingleRecipeID(id);
    navigate("/single-recipe");
  };

  const handleDelete = () => {
    console.log("DELETE");
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

  return (
    <StyledRecipePreview>
      <img src={favImg} alt="" onClick={handleFavoriteClick} />
      <p className="name">{name}</p>
      <p className="category">{category}</p>

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
