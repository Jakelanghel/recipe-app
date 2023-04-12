import React from "react";
import { StyledThemeSwitch } from "./ThemeSwitch.Styled";
import { Context } from "../../../Context";

const ThemeSwitch = () => {
  const { setIsDark, isDark } = React.useContext(Context);

  const toggleDarkMode = () => {
    setIsDark((oldState) => !oldState);
  };

  return (
    <StyledThemeSwitch>
      <div className="container-options">
        <button>light</button>
        <button>dark</button>
      </div>
      <div className="slider" onClick={toggleDarkMode}>
        <div className={isDark ? "thumb dark-mode" : "thumb"}></div>
      </div>
    </StyledThemeSwitch>
  );
};

export default ThemeSwitch;
