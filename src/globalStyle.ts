import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=BioRhyme|Mogra");

  h1,
  h2 {
    font-family: "Mogra", cursive;
  }

  body,
  select,
  input,
  button {
    font-family: "BioRhyme", cursive;
    background-color: #f3f3f3;
  }

  body {
    max-width: 500px;
    margin: 0 auto 0 auto;
    padding: 0;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
