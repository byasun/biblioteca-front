import { createGlobalStyle } from "styled-components";
import { GlobalVariables } from "../global/GlobalVariables";

const ButtonStyles = createGlobalStyle`
  .primary-button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s ease;
  }

  .primary-button:hover {
    background-color: var(--secondary-color);
  }

  .primary-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default ButtonStyles;
