import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/paths'; // Importe as rotas
import logo from '../../components/imagens/NTD.png';
import lupa from '../../components/imagens/lupa.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Pesquisar..." className="navbar-search-bar" />
        <button className="navbar-search-button">
          <img src={lupa} alt="Lupa" className="navbar-button-icon" />
        </button>
      </div>
      <div className="navbar-right">
        <button className="navbar-menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`navbar-dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
          <button className="primary-button" type="button" onClick={() => navigate(ROUTES.LOGIN)}>
            Fazer login
          </button>
          <button className="primary-button" type="button" onClick={() => navigate(ROUTES.SIGNUP)}>
            Criar conta
          </button>
          <button className="primary-button" type="button" onClick={() => navigate('/sobre')}>
            Saiba Mais
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
