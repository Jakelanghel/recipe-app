import React from "react";
import { StyledSidebar } from "./Sidebar.Styled";
import SearchBar from "./search-bar/SearchBar";
import Nav from "./navigation/Nav";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <SearchBar />
      <Nav />
    </StyledSidebar>
  );
};

export default Sidebar;
