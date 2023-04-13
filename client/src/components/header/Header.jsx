import React from "react";
import { StyledHeader } from "./Header.Styled";
import { images } from "../../constants/images";
import { Context } from "../../Context";

const Header = () => {
  const { toggleSideBar, isDark } = React.useContext(Context);

  return (
    <StyledHeader>
      <div className="container">
        <div className="container-menu-icon">
          <img
            src={images.menuIcon}
            alt="menu icon"
            onClick={toggleSideBar}
            className={isDark ? "filter-white" : "filter-blue"}
          />
        </div>

        <div className="container-logo">
          <img
            src={images.utensilsIcon}
            alt="logo"
            className={isDark ? "filter-white" : "filter-blue"}
          />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
