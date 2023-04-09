import React, { useEffect } from "react";
import { Context } from "../../Context";
import { StyledHome } from "./Home.Styled";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";
import SearchBar from "./search-bar/SearchBar";
import SortButtons from "./sort/SortButtons";
import { getPreviewElements } from "./getPreviewElements";

const Home = () => {
  const { setRecipeData, recipeData } = React.useContext(Context);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/v1/recipes");
        const data = await response.json();
        setRecipeData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, []);

  const previewElements = getPreviewElements(recipeData);

  return (
    <StyledHome>
      <SortButtons />
      <SearchBar />
      {previewElements}
    </StyledHome>
  );
};

export default Home;
