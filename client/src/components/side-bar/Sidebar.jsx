import React from "react";
import { StyledSidebar } from "./Sidebar.Styled";
import Nav from "./nav/Nav";
import ThemeSwitch from "./theme-switch/ThemeSwitch";
import { navVariants } from "./variants/navVariants";

const Sidebar = () => {
  return (
    <StyledSidebar
      variants={navVariants}
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
