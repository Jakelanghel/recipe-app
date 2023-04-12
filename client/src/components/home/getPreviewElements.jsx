import RecipePreview from "../recipes/recipe-preview/RecipePreview";
const Loading = () => <h1>Loading...</h1>;
const NoRecipes = () => <h1>No Recipes matched your search query!</h1>;

import { FadeInView } from "../shared/motion/FadeInView";

export const getPreviewElements = (recipeData) => {
  if (!recipeData) {
    return <Loading />;
  } else if (recipeData.length === 0) {
    return <NoRecipes />;
  } else {
    return recipeData.map(
      ({ _id, name, category, ingredients, favorite, cookTime }, i) => (
        <FadeInView key={i}>
          <RecipePreview
            key={_id}
            id={_id}
            name={name}
            category={category}
            ingredients={ingredients.slice(0, 3)}
            fav={favorite}
            cookTime={cookTime}
          />
        </FadeInView>
      )
    );
  }
};
