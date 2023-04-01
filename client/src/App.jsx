import React, { useState, useEffect } from "react";
import Sidebar from "./components/side-bar/Sidebar";
import { GlobalStyles } from "./components/shared/Global";
import Header from "./components/header/Header";
import NewRecipe from "./components/recipes/new-recipe/NewRecipe";
import Home from "./components/home/Home";

import { Context } from "./Context";

function App() {
  const { sideBarOpen, newRecipeOpen, setNewRecipeOpen, setRecipeData } =
    React.useContext(Context);

  return (
    <>
      <GlobalStyles />

      <div className="container-app">
        <Header />
        <Home />
        {sideBarOpen ? <Sidebar /> : null}
        {newRecipeOpen ? <NewRecipe /> : null}
      </div>
    </>
  );
}

export default App;
