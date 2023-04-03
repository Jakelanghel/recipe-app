export const deleteRecipe = async (id, setRecipeData) => {
  try {
    const response = await fetch(`/api/v1/recipes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    window.location.reload(true);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
