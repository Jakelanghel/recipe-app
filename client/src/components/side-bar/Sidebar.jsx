import React from "react";
import { StyledSidebar } from "./Sidebar.Styled";
import SearchBar from "./search-bar/SearchBar";
import Nav from "./navigation/Nav";
import ThemeSwitch from "./theme-switch/ThemeSwitch";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SearchBar />
      <Nav />
      <ThemeSwitch />
    </StyledSidebar>
  );
};

export default Sidebar;
