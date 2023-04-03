import React, { useEffect } from "react";
import { Context } from "../../Context";
import { StyledHome } from "./Home.Styled";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";
import SearchBar from "./search-bar/SearchBar";
import SortBtns from "../sort/SortBtns";

const Home = () => {
  const { recipeData, setRecipeData } = React.useContext(Context);

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

  const sortRecipes = async (e) => {
    const sortParam = e.target.textContent;
    console.log(sortParam);

    try {
      const response = await fetch(`/api/v1/recipes?sort=${sortParam}`);
      const data = await response.json();
      setRecipeData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const previewElements = recipeData
    ? recipeData.map((recipe) => {
        return (
          <RecipePreview
            key={recipe._id}
            id={recipe._id}
            name={recipe.name}
            category={recipe.category}
            ingredients={recipe.ingredients.slice(0, 3)}
            fav={recipe.favorite}
          />
        );
      })
    : null;
  return (
    <StyledHome>
      <SortBtns handleSort={sortRecipes} />
      <SearchBar />
      {previewElements}
    </StyledHome>
  );
};

export default Home;
