export const handleSort = async (e, setRecipeData) => {
  const sortParam = e.target.textContent;
  const btns = document.querySelectorAll(".sort-btn");
  btns.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");

  try {
    const response = await fetch(`/api/v1/recipes?sort=${sortParam}`);
    const data = await response.json();
    setRecipeData(data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
