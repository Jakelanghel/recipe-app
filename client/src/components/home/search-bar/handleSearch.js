export const handleSearch = async (setRecipeData) => {
  const search = inputRef.current.value;
  try {
    const response = await fetch(`/api/v1/recipes?search=${search}`);
    const data = await response.json();
    setRecipeData(data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
