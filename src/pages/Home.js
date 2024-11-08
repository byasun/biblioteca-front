import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';  // Importa a Navbar que você já criou
import Footer from '../components/Footer';  // Importa o Footer
import Carousel from '../components/Carrossel';  // Importa o Carrossel

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Container = styled.div`
  flex: 1; /* Faz o conteúdo ocupar o espaço disponível */
  padding: 2rem;
  margin-top: 4rem; /* Ajuste a margem para a altura da navbar */
  text-align: left;
  margin: 50px;
`;

const Home = () => (
  <PageContainer>
    <Navbar />  {/* Coloca a Navbar no topo */}
    <Container>
      <h1>Bem-vindo à Biblioteca da REGAP</h1>
      <p>Estamos com uma nova missão, a de compartilhar conhecimento e histórias com todos e para isso trazemos as estantes viajantes.</p>
      
      <Carousel /> {/* Adiciona o Carrossel */}
      
    </Container>
    <Footer /> {/* Coloca o Footer ao final */}
  </PageContainer>
);

export default Home;
