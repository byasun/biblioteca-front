import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="src/components/imagens/NTD.png" alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Pesquisar..." className="navbar-search-bar" />
        <button className="navbar-search-button">
          <img src="src/components/imagens/lupa.png" alt="Pesquisar" className="navbar-button-icon" />
        </button>
      </div>
      <div className="navbar-right">
        <button className="navbar-menu-button" onClick={toggleMenu}>☰</button>
        {isMenuOpen && (
          <div className="navbar-dropdown-menu">
            <button className="primary-button" type="button" onClick={() => window.location.href = 'src/pages/Login.js'}>Fazer login</button>
            <button className="primary-button" type="button" onClick={() => window.location.href = '/cadastro'}>Criar conta</button>
            <button className="primary-button" type="button" onClick={() => window.location.href = '/'}>Saiba Mais</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
