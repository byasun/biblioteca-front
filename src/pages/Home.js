import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';  // Importa a Navbar que você já criou

const Container = styled.div`
  padding: 2rem;
  margin-top: 4rem; /* Ajuste a margem para a altura da navbar */
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
