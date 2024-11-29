import { createGlobalStyle } from "styled-components";
import { GlobalVariables } from "../global/GlobalVariables";

const NavbarStyles = createGlobalStyle`
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--primary-color);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }

  /* Outros estilos da Navbar */
`;

export default NavbarStyles;