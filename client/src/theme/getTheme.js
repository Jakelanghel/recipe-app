export const getTheme = (isDark) => {
  return isDark
    ? {}
    : {
        primaryBG: "rgb(250, 250, 250)", // (white)
        lightBlue: "rgb(228, 229, 241)", // (light blue)
        darkBlue: " rgb(72, 75, 106)", // (dark blue)
        lightGray: "rgb(210, 211, 219)", // (light gray)
        darkGray: "rgb(147, 148, 165)", // (dark blue)
      };
};
