import { getTotalMins } from "./getTotalMins";

export const postRecipe = (newRecipe, navigate, setError) => {
  try {
    // Validate required fields
    if (!newRecipe.name || !newRecipe.ingredients || !newRecipe.instructions) {
      // Display an error message or alert the user that required fields are missing

      setError(true);

      return;
    }
    setError(false);

    fetch("/api/v1/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((response) => response.json())
      .then(() => navigate("/"));
  } catch (error) {
    console.log(error);
  }
};
