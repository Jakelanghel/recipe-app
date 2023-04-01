import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../home/Home";
import NewRecipe from "../recipes/new-recipe/NewRecipe";
import Favorites from "../favorites/Favorites";
import ShoppingList from "../shopping-list/ShoppingList";

const Router = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route base path="/" element={<Home />} />
      <Route base path="/new-recipe" element={<NewRecipe />} />
      <Route base path="/favorites" element={<Favorites />} />
      <Route base path="/shopping-list" element={<ShoppingList />} />
    </Routes>
  );
};

export default Router;
