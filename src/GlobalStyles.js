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

    .primary-button {
    background-color: #6ab0e3;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #4a90e2;
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

  /* Estilos do Carrossel */
.carousel-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-image {
  min-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}

/* Botões do Carrossel */
.carousel-button {
  background-color: #6ab0e3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5093c6;
  }
}


   /* Estilos da Navbar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #6ab0e3;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }

  .navbar-logo {
    width: 150px;
    height: auto;
    margin-left: 20px;
    margin-top: 5px;
  }

  .navbar-search-bar {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 5px;
  }

  .navbar-search-button {
    background: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-top: 5px;
  }

  .navbar-menu-button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    margin-right: 50px;
  }

  .navbar-dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: #6ab0e3;
    border: 1px solid #fff;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
  }

  .navbar-dropdown-menu button {
    background: transparent;
    border: none;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }

  /* Estilos para a página Home */
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .home-container {
    flex: 1;
    padding: 2rem;
    margin-top: 4rem;
    text-align: left;
    margin: 50px;
  }

  /* Responsividade para tablets (telas até 768px) */
  @media (max-width: 768px) {
    body {
      font-size: 90%;
    }

    h1 {
      font-size: 1.8rem;
    }

    .home-container {
      padding: 1.5rem;
      margin: 20px;
    }
    
    input, textarea {
      font-size: 14px;
      padding: 6px;
    }
  }

  /* Responsividade para tablets (telas até 768px) */
  @media (max-width: 768px) {
    body {
      font-size: 90%;
    }

    h1 {
      font-size: 1.8rem;
    }
    
    input, textarea {
      font-size: 14px;
      padding: 6px;
    }
  }

  /* Responsividade para smartphones (telas até 480px) */
  @media (max-width: 480px) {
    body {
      font-size: 80%;
    }

    h1 {
      font-size: 1.5rem;
    }
    
    input, textarea {
      font-size: 12px;
      padding: 5px;
    }
  }

  /* Responsividade específica para a Navbar */
  @media (max-width: 768px) {
    .navbar {
      padding: 10px;
    }

    .navbar-logo {
      width: 120px;
      margin-left: 10px;
    }

    .navbar-menu-button {
      margin-right: 20px;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      flex-direction: column;
      align-items: center;
      padding: 8px;
    }

    .navbar-logo {
      width: 100px;
      margin: 0;
    }

    .navbar-search-bar {
      width: 100%;
      margin-top: 5px;
    }

    .navbar-search-button {
      width: 100%;
      margin-top: 5px;
    }

    .navbar-menu-button {
      font-size: 20px;
      margin: 0;
    }

    .navbar-dropdown-menu {
      width: 100%;
      position: relative;
      margin: 0;
    }
  }
`;

export default GlobalStyles;
