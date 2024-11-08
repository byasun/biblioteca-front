import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';  // Importa a Navbar que você já criou

const Container = styled.div`
  padding: 6rem 2rem 2rem;
  text-align: center;
`;

const Home = () => (
  <div>
    <Navbar />  {/* Coloca a Navbar no topo */}
    <Container>
      <h1>Bem-vindo à Biblioteca Comunitária</h1>
      <p>Encontre, empreste e compartilhe livros com a comunidade.</p>
    </Container>
  </div>
);

export default Home;
