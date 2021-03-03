import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #F2F2F2;
    --text: #141414;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    background: var(--bg);
    color: var(--text);
  }  

  a {
    color: inherit;
    text-decoration: none;
  }
`;
