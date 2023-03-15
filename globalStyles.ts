import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'Comfortaa', cursive;
    color: #212529;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
