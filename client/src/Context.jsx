import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [recipeData, setRecipeData] = useState(null);
  const [singleRecipeID, setSingleRecipeID] = useState(null);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
