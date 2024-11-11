import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carrossel';

const Home = () => (
  <div className="page-container">
    <Navbar />
    <div className="home-container">
      <h1>Bem-vindo à Biblioteca da REGAP</h1>
      <p>Estamos com uma nova missão, a de compartilhar conhecimento e histórias com todos e para isso trazemos as estantes viajantes.</p>
      <Carousel />
    </div>
    <Footer />
  </div>
);

export default Home;
