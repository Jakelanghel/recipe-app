import React from "react";
import { StyledNav } from "./StyledNav";
import { images } from "../../../constants/images";
import { NavLink } from "react-router-dom";
import { Context } from "../../../Context";

const Nav = () => {
  const { toggleSideBar, isDark } = React.useContext(Context);

  const handleClick = () => {
    toggleSideBar();
  };
  return (
    <StyledNav>
      <img
        src={images.closeIcon}
        alt=""
        className={
          isDark ? "filter-white close-icon" : "filter-blue close-icon"
        }
        onClick={handleClick}
      />
      <NavLink to="/" className="nav-link" onClick={handleClick}>
        <img
          src={images.homeIcon}
          alt="home"
          className={isDark ? "filter-white" : "filter-blue"}
        />
        Home
      </NavLink>
      <NavLink to="/new-recipe" className="nav-link" onClick={handleClick}>
        <img
          src={images.plusIcon}
          alt="new recipe"
          className={isDark ? "filter-white" : "filter-blue"}
        />
        New recipe
      </NavLink>
      <NavLink to="/favorites" className="nav-link" onClick={handleClick}>
        <img
          src={images.heartIcon}
          alt="favorites"
          className={isDark ? "filter-white" : "filter-blue"}
        />
        favorites
      </NavLink>
      <NavLink to="/shopping-list" className="nav-link" onClick={handleClick}>
        <img
          src={images.listIcon}
          alt="shopping list"
          className={isDark ? "filter-white" : "filter-blue"}
        />
        Shopping list
      </NavLink>
    </StyledNav>
  );
};

export default Nav;
