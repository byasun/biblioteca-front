import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/usuarios/usuarioSlice'; // Ação de logout
import { ROUTES } from '../../routes/paths'; // Rotas definidas
import logo from '../../components/imagens/NTD.png';
import lupa from '../../components/imagens/lupa.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.usuario.isAuthenticated); // Verifica se está logado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout()); // Realiza logout
    navigate('/'); // Redireciona para a página inicial
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
          {!isAuthenticated ? (
            // Navbar para usuários não logados
            <>
              <button className="primary-button" type="button" onClick={() => navigate(ROUTES.LOGIN)}>
                Fazer Login
              </button>
              <button className="primary-button" type="button" onClick={() => navigate(ROUTES.SIGNUP)}>
                Criar Conta
              </button>
              <button className="primary-button" type="button" onClick={() => navigate('/sobre')}>
                Saiba Mais
              </button>
            </>
          ) : (
            // Navbar para usuários logados
            <>
              <button className="primary-button" type="button" onClick={() => navigate(ROUTES.DASHBOARD)}>
                Estante
              </button>
              <button className="primary-button" type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
