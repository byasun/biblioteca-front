import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/usuarioReducer';
import { useAuth0 } from '@auth0/auth0-react';

const Nav = styled.nav`
  position: fixed;  /* Fixando a navbar no topo */
  top: 0;
  left: 0;
  width: 100%;
  background: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1000;  /* Garantindo que a navbar esteja acima do conteúdo */
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { logout: auth0Logout } = useAuth0();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    auth0Logout({ returnTo: window.location.origin });
  };

  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      {isAuthenticated && <span>Bem-vindo, {user.nome}</span>}
    </Nav>
  );
};

export default Navbar;
