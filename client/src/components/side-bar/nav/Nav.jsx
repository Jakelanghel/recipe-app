import React from "react";
import { StyledNav } from "./StyledNav";
import { images } from "../../../constants/images";
import { NavLink } from "react-router-dom";
import { Context } from "../../../Context";

const Nav = () => {
  const { toggleSideBar } = React.useContext(Context);

  const handleClick = () => {
    toggleSideBar();
  };
  return (
    <StyledNav>
      <NavLink to="/" onClick={handleClick}>
        <img src={images.homeIcon} alt="home" />
        Home
      </NavLink>
      <NavLink to="/new-recipe" onClick={handleClick}>
        <img src={images.plusIcon} alt="new recipe" />
        New recipe
      </NavLink>
      <NavLink to="/favorites" onClick={handleClick}>
        <img src={images.heartIcon} alt="favorites" />
        favorites
      </NavLink>
      <NavLink to="/shopping-list" onClick={handleClick}>
        <img src={images.listIcon} alt="shopping list" />
        Shopping list
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
