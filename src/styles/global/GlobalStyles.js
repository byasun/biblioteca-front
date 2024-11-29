import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  :root {
    --primary-color: #6ab0e3;
    --secondary-color: #5093c6;
    --background-color: #fff;
    --text-color: #333;
    --error-color: red;
    --font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    padding-top: 80px; /* Espaço para a navbar fixada */
    padding-bottom: 60px; /* Espaço para o footer fixado */
  }

  h1, h2, h3 {
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    &:hover {
      color: var(--secondary-color);
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
    width: 100%;
    &:focus {
      border-color: var(--primary-color);
      outline: none;
    }
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }

  /* Estilos para os campos de entrada */
  .form-field {
    margin-bottom: 15px;
  }

  .form-field label {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }

  .form-field input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
  }

  .form-field input:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  /* Botão principal */
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

  /* Estilos Globais para Formulários */
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  .login-container, .cadastro-container {
    max-width: 500px;
    margin: 50px auto;
  }

  h1, h2 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
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

  .carousel-button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
    transition: background-color 0.3s;
  }

  .carousel-button:hover {
    background-color: var(--secondary-color);
  }

  .carousel-button:focus {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }

  /* Navbar */
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

  .navbar-left, .navbar-center, .navbar-right {
    display: flex;
    align-items: center;
  }

  .navbar-left {
    margin-right: auto;
    margin-left: 15px;
  }

  .navbar-center {
    flex: 1;
    justify-content: center;
  }

  .navbar-right {
    margin-left: auto;
    margin-right: 15px;
  }

  .navbar-logo {
    width: 40px;
    height: auto;
  }

  .navbar-search-bar {
    padding: 10px;
    border: none;
    border-radius: 5px;
    width: 300px;
  }

  .navbar-search-button {
    background: none;
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }

  .navbar-button-icon {
    width: 20px;
    height: 20px;
  }

  /* Estilos do Dropdown do Menu */
  .navbar-dropdown-menu {
    position: absolute;
    top: 60px; /* Abaixo da navbar */
    right: 20px; /* Alinha o menu com o botão de menu */
    background-color: var(--primary-color);
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 999;
    visibility: hidden; /* Inicialmente escondido */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .navbar-dropdown-menu.show {
    visibility: visible;
    opacity: 1;
  }

  .navbar-dropdown-menu button {
    background: none;
    border: none;
    padding: 10px;
    color: white;
    text-align: left;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .navbar-dropdown-menu button:hover {
    background-color: var(--secondary-color);
  }

  .navbar-menu-button {
    background: none;
    border: none;
    font-size: 30px;
    color: white;
    cursor: pointer;
    padding: 0;
    margin-left: 15px;
  }

  /* Estilos do Footer (fixo no final da tela) */
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
    background-color: var(--primary-color);
    color: #fff;
    z-index: 1000; /* Garante que o footer fique sobre outros elementos */
  }

  footer p {
    margin: 0;
  }

  /* Página de Erro 404 */
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  .error-page h1 {
    font-size: 4rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .error-page p {
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }

  .error-page .error-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--secondary-color);
    }
    &:focus {
      outline: 2px solid var(--secondary-color);
      outline-offset: 2px;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    body {
      font-size: 90%;
    }

    .navbar {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    footer {
      padding: 15px;
    }

    .error-page h1 {
      font-size: 3rem;
    }

    .error-page p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    body {
      font-size: 80%;
    }

    .navbar-search-bar,
    .navbar-search-button {
      width: 100%;
    }

    .error-page h1 {
      font-size: 2.5rem;
    }

    .error-page p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
