import React, { useState } from 'react';
import fundoImg1 from '../components/imagens/fundo.png';  // Importando a imagem
import fundoImg2 from '../components/imagens/fundo.png';  // Importando outra imagem
import fundoImg3 from '../components/imagens/fundo.png';  // E mais imagens se necessário

import '../styles/GlobalStyles';  // Certifique-se de que o arquivo GlobalStyles.js esteja sendo importado corretamente

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    fundoImg1,
    fundoImg2,
    fundoImg3
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="carousel-image" style={{ backgroundImage: `url(${src})` }} />
        ))}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="carousel-button" onClick={goToPrevious}>Anterior</button>
        <button className="carousel-button" onClick={goToNext}>Próximo</button>
      </div>
    </div>
  );
};

export default Carousel;
