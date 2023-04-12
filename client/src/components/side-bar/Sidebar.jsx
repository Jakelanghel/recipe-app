import React from "react";
import { StyledSidebar } from "./Sidebar.Styled";
import Nav from "./nav/Nav";
import ThemeSwitch from "./theme-switch/ThemeSwitch";
import { sideBarVariants } from "./variants/sideBarVariants";

const Sidebar = () => {
  return (
    <StyledSidebar
      variants={sideBarVariants}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <Nav />
      <ThemeSwitch />
    </StyledSidebar>
  );
};

export default Sidebar;
