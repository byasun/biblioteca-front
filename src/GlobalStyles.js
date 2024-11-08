import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
  }

  h1, h2, h3 {
    color: #333;
  }

  a {
    text-decoration: none;
    color: #6ab0e3;
    
    &:hover {
      color: #4a90e2;
    }
  }

  button {
    cursor: pointer;
  }

  input, textarea {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    
    &:focus {
      border-color: #6ab0e3;
      outline: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #6ab0e3;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
`;

export default GlobalStyles;
