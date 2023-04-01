import React from "react";
import { StyledSidebar } from "./Sidebar.Styled";
import Nav from "./nav/Nav";
import ThemeSwitch from "./theme-switch/ThemeSwitch";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Nav />
      <ThemeSwitch />
    </StyledSidebar>
  );
};

export default Sidebar;
