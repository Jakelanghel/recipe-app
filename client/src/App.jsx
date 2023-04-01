import React, { useState, useEffect } from "react";
import Sidebar from "./components/side-bar/Sidebar";
import { GlobalStyles } from "./components/shared/Global";
import Header from "./components/header/Header";
import Router from "./components/router/Router";
import { Context } from "./Context";

function App() {
  const { sideBarOpen, newRecipeOpen, setNewRecipeOpen, setRecipeData } =
    React.useContext(Context);

  return (
    <>
      <GlobalStyles />

      <div className="container-app">
        <Header />
        {sideBarOpen ? <Sidebar /> : null}
        <Router />
      </div>
    </>
  );
}

export default App;
