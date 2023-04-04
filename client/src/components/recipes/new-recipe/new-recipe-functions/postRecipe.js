import { getTotalMins } from "./getTotalMins";

export const postRecipe = (newRecipe, navigate) => {
  fetch("/api/v1/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRecipe),
  })
    .then((response) => response.json())
    .then((data) => navigate("/"))
    .catch((error) => console.error(error));
};
