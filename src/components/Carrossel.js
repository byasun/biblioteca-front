import React, { useState } from 'react';
import styled from 'styled-components';

// Estilo do Carrossel
const CarouselContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselImage = styled.div`
  min-width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
`;

const Button = styled.button`
  background-color: #6ab0e3;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5093c6;
  }
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'src\components\imagens\fundo.png',
    'src\components\imagens\fundo.png',  // Adicione outros caminhos de imagem aqui
    'src\components\imagens\fundo.png'
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselContainer>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <CarouselImage key={index} style={{ backgroundImage: `url(${src})` }} />
        ))}
      </CarouselWrapper>
      
      {/* Botões de navegação */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={goToPrevious}>Anterior</Button>
        <Button onClick={goToNext}>Próximo</Button>
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
