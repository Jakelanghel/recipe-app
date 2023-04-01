import React, { useEffect } from "react";
import { Context } from "../../Context";
import { StyledHome } from "./Home.Styled";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";
import SearchBar from "./search-bar/SearchBar";

const Home = () => {
  const { recipeData } = React.useContext(Context);
  console.log(recipeData);

  const previewElements = recipeData
    ? recipeData.map((recipe) => {
        return (
          <RecipePreview
            key={recipe._id}
            name={recipe.name}
            category={recipe.category}
            ingredients={recipe.ingredients.slice(0, 3)}
          />
        );
      })
    : null;
  return (
    <StyledHome>
      <SearchBar />

      {previewElements}
    </StyledHome>
  );
};

export default Home;
