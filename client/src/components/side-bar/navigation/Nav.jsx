import React from "react";
import { StyledNav } from "./StyledNav";
import { images } from "../../../constants/images";
const Nav = () => {
  console.log(images);
  return (
    <StyledNav>
      <button>
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
