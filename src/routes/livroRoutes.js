// src/routes/livroRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import { DetalhesLivro, AvaliarLivro } from '../components/livros';  // Componentes para detalhes e avaliação de livros

const LivroRoutes = () => (
  <>
    <Route path="/app/livros/detalhes/:id" element={<DetalhesLivro />} />
    <Route path="/app/livros/avaliar/:id" element={<AvaliarLivro />} />
  </>
);

export default LivroRoutes;
