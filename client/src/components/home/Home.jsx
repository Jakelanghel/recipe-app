import React, { useEffect } from "react";
import { Context } from "../../Context";
import { StyledHome } from "./Home.Styled";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";
import SearchBar from "./search-bar/SearchBar";

const Home = () => {
  const { recipeData, setRecipeData } = React.useContext(Context);
  console.log(recipeData);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/v1/recipes");
        const data = await response.json();
        setRecipeData(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, []);

  const previewElements = recipeData
    ? recipeData.map((recipe) => {
        return (
          <RecipePreview
            key={recipe._id}
            id={recipe._id}
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
