import React from "react";
import { GlobalStyles } from "./components/shared/Global";
import { Context } from "./Context";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme/getTheme";

import Header from "./components/header/Header";
import Router from "./components/router/Router";
import Sidebar from "./components/side-bar/Sidebar";

function App() {
  const { sideBarOpen, isDark } = React.useContext(Context);
  const theme = getTheme(isDark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <div className="container-app">
          <Header />
          {sideBarOpen ? <Sidebar /> : null}
          <Router />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
