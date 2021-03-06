import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    background-color: #E5E5E5;
    -webkit-font-smoothing: antialised;
  }
`;