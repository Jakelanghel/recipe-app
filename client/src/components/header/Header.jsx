import React from "react";
import { StyledHeader } from "./Header.Styled";
import { images } from "../../constants/images";
import { Context } from "../../Context";

const Header = (props) => {
  const { toggleSideBar } = React.useContext(Context);

  return (
    <StyledHeader>
      <div className="container">
        <div className="container-menu-icon">
          <img src={images.menuIcon} alt="menu icon" onClick={toggleSideBar} />
        </div>

        <div className="container-logo">
          <img src={images.utensilsIcon} alt="logo" className="logo" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
