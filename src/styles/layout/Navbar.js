import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/usuarios/usuarioSlice'; // Ação de logout
import { ROUTES } from '../../routes/paths'; // Rotas definidas
import logo from '../../components/imagens/NTD.png';
import lupa from '../../components/imagens/lupa.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.usuario);

  const navigate = useNavigate(); // Para navegação
  const dispatch = useDispatch(); // Para disparar ações do Redux

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
    window.location.reload(); // Atualiza a página para garantir a limpeza do estado
  };   

  const handleMenuClick = (route) => {
    setIsMenuOpen(false); // Fecha o menu
    navigate(route);      // Navega para a rota
  };

  console.log("Navbar - Autenticação:", { isAuthenticated, user });

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
            <>
              <button
                className="primary-button"
                type="button"
                onClick={() => handleMenuClick(ROUTES.LOGIN)}
              >
                Fazer Login
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={() => handleMenuClick(ROUTES.SIGNUP)}
              >
                Criar Conta
              </button>
              <button
                className="primary-button"
                type="button"
                onClick={() => handleMenuClick('/sobre')}
              >
                Saiba Mais
              </button>
            </>
          ) : (
            <>
              <button
                className="primary-button"
                type="button"
                onClick={() => handleMenuClick(ROUTES.DASHBOARD)}
              >
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