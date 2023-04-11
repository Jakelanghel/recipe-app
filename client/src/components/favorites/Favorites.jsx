import React, { useEffect } from "react";
import { StyledFavorites } from "./Favorites.Styled";
import { Context } from "../../Context";
import RecipePreview from "../recipes/recipe-preview/RecipePreview";
import BackBtn from "../shared/back-btn/BackBtn";

const Favorites = () => {
  const { recipeData, setRecipeData } = React.useContext(Context);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("/api/v1/recipes/favorites");
        const data = await response.json();
        setRecipeData(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFavorites();
  }, []);

  const recipeElements = recipeData ? (
    recipeData.map((recipe) => (
      <RecipePreview
        key={recipe._id}
        id={recipe._id}
        name={recipe.name}
        category={recipe.category}
        ingredients={recipe.ingredients.slice(0, 3)}
        fav={recipe.favorite}
      />
    ))
  ) : (
    <h1>Loading...</h1>
  );

  return (
    <main className="pg-padding">
      <StyledFavorites>
        <div className="container-recipes">{recipeElements}</div>
        <BackBtn />
      </StyledFavorites>
    </main>
  );
};

export default Favorites;
