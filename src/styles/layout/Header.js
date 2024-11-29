import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Biblioteca Comunitária</h1>
    </HeaderContainer>
  );
};

export default Header;