import React from 'react';
import { Route } from 'react-router-dom';
import { DetalhesLivro, AvaliarLivro, DoarLivro, PegarLivro, DevolverLivro } from '../components/livros';  // Importa os componentes para os livros

const LivroRoutes = () => (
  <>
    <Route path="/app/livros/detalhes/:id" element={<DetalhesLivro />} />
    <Route path="/app/livros/avaliar/:id" element={<AvaliarLivro />} />
    <Route path="/app/livros/doar" element={<DoarLivro />} /> {/* Rota para doar livro */}
    <Route path="/app/livros/pegar" element={<PegarLivro />} /> {/* Rota para pegar livro */}
    <Route path="/app/livros/devolver" element={<DevolverLivro />} /> {/* Rota para devolver livro */}
  </>
);

export default LivroRoutes;
