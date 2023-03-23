import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.colors.mercury};
    min-height: 80vh;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.grey};
  }
`;