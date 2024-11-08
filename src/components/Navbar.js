import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilizando o nav
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #6ab0e3;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
`;

// Estilizando o link do navbar
const NavLink = styled(Link)`
  color: #fff;
  margin-right: 20px;
  text-decoration: none;
  padding: 10px;
  margin-left: 50px;

  &:hover {
    text-decoration: underline;
  }
`;

// Estilizando o botão do menu
const MenuButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  margin-right: 50px;
`;

// Estilizando o menu dropdown
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #6ab0e3;
  border: 1px solid #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  button {
    background: transparent;
    border: none;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Estilizando o logo
const Logo = styled.img`
  width: 150px; 
  height: auto;
  margin-left: 20px;
  margin-top: 5px;
`;

// Estilizando a barra de pesquisa
const SearchBar = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 5px; 
`;

// Estilizando o botão de pesquisa
const SearchButton = styled.button`
  background: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 5px; 
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <div className="navbar-left">
        <Link to="/">
          <Logo src="src/components/imagens/NTD.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <SearchBar type="text" placeholder="Pesquisar..." className="search-bar" />
        <SearchButton className="search-button">
          <img src="src/components/imagens/lupa.png" alt="Pesquisar" className="button-icon" />
        </SearchButton>
      </div>
      <div className="navbar-right">
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
        {isMenuOpen && (
          <DropdownMenu>
            <button type="button" onClick={() => window.location.href = 'src/pages/Login.js'}>Fazer login</button>
            <button type="button" onClick={() => window.location.href = '/cadastro'}>Criar conta</button>
          </DropdownMenu>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;