import React from "react";
import { StyledFavorites } from "./Favorites.Styled";
import { Context } from "../../Context";

const Favorites = () => {
  const { recipeData } = React.useContext(Context);

  console.log(recipeData);
  // const favs = recipeData.filter((recipe) => recipe.favorite);
  // console.log(favs);
  return <StyledFavorites>Favorites</StyledFavorites>;
};

export default Favorites;
