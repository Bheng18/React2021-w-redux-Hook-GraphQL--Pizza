import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        /* font-family: 'Indie Flower', cursive;  */
        /* font-family: 'PT Sans', sans-serif; */
        font-family: 'Open Sans Condensed', sans-serif;
        margin-left: 20px;

        @media screen and (max-width: 800px) {
          padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;