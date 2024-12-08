// src/routes/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  // A página principal
import Error404 from '../pages/Error404';  // Página de erro 404
import LivroRoutes from './livroRoutes';  // Rotas para livros
import UsuarioRoutes from './usuarioRoutes';  // Rotas para usuários

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />  {/* Página inicial */}
    <LivroRoutes />  {/* Rotas de livros */}
    <UsuarioRoutes />  {/* Rotas de usuários */}
    <Route path="*" element={<Error404 />} />  {/* Página de erro 404 para rotas não encontradas */}
  </Routes>
);

export default AppRoutes;
