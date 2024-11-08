import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Biblioteca Comunitária. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
