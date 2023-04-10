import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



* {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}



    html, 
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        background-color: ${({ theme }) => theme.primaryBG}; 
        color:  ${({ theme }) => theme.darkBlue};
    }

    img {
        display: block;
    }

    .container-app {
        position: relative;
        padding-bottom: 2rem;
        min-height: 100vh;

    }

    .pg-padding {
        padding-top: 6.5rem;
    }

    .no-scroll {
        overflow: hidden;
    }

    .back-btn {
        width: 100px;
        margin: 0 auto;
        margin-top: auto;
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: transparent;
    }

    .back-img {
        width: 50px;
 
    }

    .filter-blue {
        filter: invert(28%) sepia(9%) saturate(1800%) hue-rotate(197deg) brightness(95%) contrast(86%);
    }
`;
