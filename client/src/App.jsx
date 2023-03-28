import React, { useState, useEffect } from "react";
import Sidebar from "./components/side-bar/Sidebar";
import { GlobalStyles } from "./components/shared/Global";
import Header from "./components/header/Header";
import NewRecipe from "./components/recipes/new-recipe/NewRecipe";

import { Context } from "./Context";

function App() {
  // const [sideBarOpen, setSideBarOpen] = useState(false);
  const [newRecipeOpen, serNewRecipeOpen] = useState(true);
  const [data, setData] = useState(null);

  const { sideBarOpen } = React.useContext(Context);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/v1/recipes");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchRecipes();
  }, []);

  console.log(data);

  return (
    <>
      <GlobalStyles />

      <div className="container-app">
        <Header />
        {sideBarOpen ? <Sidebar /> : null}
        {newRecipeOpen ? <NewRecipe /> : null}
        {/* {data} */}
      </div>
    </>
  );
}

export default App;
