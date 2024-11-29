import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #6ab0e3;
  color: #fff;
  margin-top: auto; /* Faz o footer ir para o final */
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Biblioteca Comunitária</p>
  </FooterContainer>
);

export default Footer;
