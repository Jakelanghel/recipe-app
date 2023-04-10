import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [singleRecipeID, setSingleRecipeID] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen((oldState) => !oldState);
    document.querySelector("body").classList.toggle("no-scroll");
  };

  return (
    <Context.Provider
      value={{
        sideBarOpen,
        recipeData,
        setRecipeData,
        toggleSideBar,
        singleRecipeID,
        setSingleRecipeID,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
