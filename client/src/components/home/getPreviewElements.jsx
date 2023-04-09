import RecipePreview from "../recipes/recipe-preview/RecipePreview";

export const getPreviewElements = (recipeData) => {
  if (!recipeData) {
    return <h1>Loading...</h1>;
  } else if (recipeData.length === 0) {
    return <h1>No Recipes matched your search query!</h1>;
  } else {
    return recipeData.map((recipe) => {
      return (
        <RecipePreview
          key={recipe._id}
          id={recipe._id}
          name={recipe.name}
          category={recipe.category}
          ingredients={recipe.ingredients.slice(0, 3)}
          fav={recipe.favorite}
          cookTime={recipe.cookTime}
        />
      );
    });
  }
};
