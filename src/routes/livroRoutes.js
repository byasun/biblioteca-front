import React from 'react';
import { Route } from 'react-router-dom';
import { DetalhesLivro, AvaliarLivro } from '../components/livros';

const LivroRoutes = () => (
  <>
    <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />
    <Route path="/livros/avaliar/:id" element={<AvaliarLivro />} />
  </>
);

export default LivroRoutes;
