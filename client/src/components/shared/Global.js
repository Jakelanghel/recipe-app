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
        height: 100vh;
    }

    img {
        display: block;
    }

    .container-app {
        position: relative;
        padding-bottom: 2rem;
        min-height: 100vh;

    }


    .no-scroll {
        overflow: hidden;
    }

    .back-btn {
        width: 100px;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .back-img {
        width: 50px;
    }
`;
