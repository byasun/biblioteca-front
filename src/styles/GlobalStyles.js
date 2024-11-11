import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: #fff;
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
      background-color: #5093c6;
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
    margin-bottom: 5px;
    background-color: #f4f4f4;
    width: 100%;
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
    margin: 5px;
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

 /* Estilos para o formulário de login */
  .login-container {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    text-align: center;
  }

  .login-form-field {
    margin-bottom: 1rem;
  }

  .login-input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  .login-button {
    background-color: #6ab0e3;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5093c6;
    }
  }

   .estante-item {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .estante-item p {
    margin: 0.5rem 0;
  }

 /* Estilos da Navbar */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #6ab0e3;
    padding: 15px 20px; /* Mais espaçamento nas laterais */
    display: flex;
    justify-content: space-between; /* Distribui itens nas extremidades */
    align-items: center;
    z-index: 1000;
  }

  .navbar-left, .navbar-center, .navbar-right {
    display: flex;
    align-items: center;
  }

  .navbar-left {
    margin-right: auto;
    margin-left:15px;
  }

  .navbar-center {
    flex: 1;
    justify-content: center; /* Centraliza a barra de pesquisa */
  }

  .navbar-right {
    margin-left: auto;
    margin-right: 15px;
  }

  .navbar-logo {
    width: 40px;
    height: auto;
  }

  .navbar-button-icon {
    width: 15px; 
    height: 15px;
  }

  .navbar-search-bar {
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  .navbar-search-button {
    background: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }

  .navbar-menu-button {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
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

  /* Estilo do conteúdo da página */
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 80px;
  }

  /* Estilo específico para a Home */
  .home-container {
    flex: 1;
    padding: 2rem;
    margin-top: 4rem;
    text-align: left;
  }

  /* Estilos para a página de cadastro */
  .cadastro-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-width: 500px;
    margin: 0 auto;
  }

  .cadastro-container h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .form-field {
    width: 100%;
    margin-bottom: 1rem;
  }

  .form-field label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  .form-field input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .error {
    color: red;
    font-size: 0.9rem;
  }

  .primary-button {
    width: 100%;
    background-color: #6ab0e3;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5093c6;
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

    .home-container {
      padding: 1.5rem;
      margin: 20px;
    }

    input, textarea {
      font-size: 14px;
      padding: 6px;
    }

    .navbar-search-bar {
      width: 70%; /* Ajusta o tamanho da barra de pesquisa em telas menores */
    }

    .navbar-menu-button {
      font-size: 20px;
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

    .navbar {
      flex-direction: column;
      align-items: center;
      padding: 8px;
    }

    .navbar-logo {
      width: 100px;
    }

    .navbar-search-bar,
    .navbar-search-button,
    .navbar-menu-button {
      width: 100%;
    }

    .navbar-dropdown-menu {
      width: 100%;
      position: relative;
    }
  }
`;

export default GlobalStyles;
