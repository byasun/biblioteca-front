// src/routes/livroRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import { DetalhesLivro, AvaliarLivro } from '../components/livros';  // Componentes para detalhes e avaliação de livros

const LivroRoutes = () => (
  <>
    <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />  {/* Rota para detalhes do livro */}
    <Route path="/livros/avaliar/:id" element={<AvaliarLivro />} />  {/* Rota para avaliar o livro */}
  </>
);

export default LivroRoutes;
