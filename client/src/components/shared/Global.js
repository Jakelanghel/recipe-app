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
        color:  ${({ theme }) => theme.primaryTxt};
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

    .filter-blue {
        filter: invert(28%) sepia(9%) saturate(1800%) hue-rotate(197deg)
        brightness(95%) contrast(86%);
    }

    .filter-white {
        filter: invert(99%) sepia(2%) saturate(100%) hue-rotate(221deg) brightness(119%) contrast(100%);
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

    @media screen and (min-width: 825px) {
        .container-recipes {
            padding: 2rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
    }
`;
