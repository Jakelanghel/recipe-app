import React from "react";
import { StyledNav } from "./StyledNav";
import { images } from "../../../constants/images";

import { Context } from "../../../Context";

const Nav = () => {
  const { setNewRecipeOpen, setSideBarOpen } = React.useContext(Context);

  const handleNewRecipe = () => {
    setNewRecipeOpen((oldState) => !oldState);
    setSideBarOpen(false);
  };
  return (
    <StyledNav>
      <button onClick={handleNewRecipe}>
        <img src={images.plusIcon} alt="new recipe" />
        New recipe
      </button>
      <button>
        <img src={images.homeIcon} alt="home" />
        Home
      </button>
      <button>
        <img src={images.heartIcon} alt="favorites" />
        favorites
      </button>
      <button>
        <img src={images.listIcon} alt="shopping list" />
        Shopping list
      </button>
    </StyledNav>
  );
};

export default Nav;
