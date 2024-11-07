import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => (
  <Container>
    <h1>Bem-vindo à Biblioteca Comunitária</h1>
    <p>Encontre, empreste e compartilhe livros com a comunidade.</p>
  </Container>
);

export default Home;