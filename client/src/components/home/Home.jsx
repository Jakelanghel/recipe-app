import React, { useEffect } from "react";
import { Context } from "../../Context";
import { StyledHome } from "./Home.Styled";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";

const Home = () => {
  const { recipeData } = React.useContext(Context);
  console.log(recipeData);

  // const previewElements = recipeData.map((recipe) => {
  //   return (
  //     <RecipePreview
  //       id={recipe.id}
  //       name={recipe.name}
  //       category={recipe.category}
  //       ingredients={recipe.ingredients.slice(0, 2)}
  //     />
  //   );
  // });
  const previewElements = recipeData
    ? recipeData.map((recipe) => {
        return (
          <RecipePreview
            key={recipe._id}
            name={recipe.name}
            category={recipe.category}
            ingredients={recipe.ingredients.slice(0, 2)}
          />
        );
      })
    : null;
  return <StyledHome> {previewElements}</StyledHome>;
};

export default Home;
