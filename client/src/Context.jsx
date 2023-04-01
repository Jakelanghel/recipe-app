import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [recipeData, setRecipeData] = useState(null);

  const toggleSideBar = () => {
    setSideBarOpen((oldState) => !oldState);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/v1/recipes");
        const data = await response.json();
        setRecipeData(data.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <Context.Provider
      value={{
        sideBarOpen,
        recipeData,
        setRecipeData,
        toggleSideBar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
