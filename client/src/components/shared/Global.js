import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
}


    html, 
    body {
        margin: 0;
        padding: 0;
    }

    .container-app {
        position: relative;
    }

`;
