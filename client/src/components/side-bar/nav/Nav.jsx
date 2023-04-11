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
      <img
        src={images.closeIcon}
        alt=""
        className="close-icon"
        onClick={handleClick}
      />
      <NavLink to="/" className="nav-link" onClick={handleClick}>
        <img src={images.homeIcon} alt="home" />
        Home
      </NavLink>
      <NavLink to="/new-recipe" className="nav-link" onClick={handleClick}>
        <img src={images.plusIcon} alt="new recipe" />
        New recipe
      </NavLink>
      <NavLink to="/favorites" className="nav-link" onClick={handleClick}>
        <img src={images.heartIcon} alt="favorites" />
        favorites
      </NavLink>
      <NavLink to="/shopping-list" className="nav-link" onClick={handleClick}>
        <img src={images.listIcon} alt="shopping list" />
        Shopping list
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
