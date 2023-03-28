import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [newRecipeOpen, serNewRecipeOpen] = useState(true);
  const [data, setData] = useState(null);

  const toggleSideBar = () => {
    setSideBarOpen((oldState) => !oldState);
  };
  return (
    <Context.Provider
      value={{
        sideBarOpen,
        setSideBarOpen,
        newRecipeOpen,
        serNewRecipeOpen,
        data,
        setData,
        toggleSideBar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
