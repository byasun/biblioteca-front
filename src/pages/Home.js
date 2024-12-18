import React from 'react';
import Navbar from '../styles/layout/Navbar';
import Footer from '../styles/layout/Footer';
import Carousel from '../components/common/Carrossel';

const Home = () => (
  <div className="page-container">
    <Navbar />
    <div className="home-container">
      <h1>Bem-vindo à Biblioteca da REGAP</h1>
      <p>Estamos com uma nova missão, a de compartilhar conhecimento e histórias com todos e para isso trazemos as estantes viajantes.</p>
      <Carousel />
      <button onClick={handleLogout}>Sair</button>
    </div>
    <Footer />
  </div>
);

export default Home;
