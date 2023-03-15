import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: #000;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #2962ff 0%, #512da8 100%);
    border-radius: 100px;
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

  .textFlow {
    font-size: calc(0.4rem + 1vw);
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  @media(max-width: 575px) {
    .textFlow {
      font-size: calc(1rem + 1vw);
    }
  }
`;
