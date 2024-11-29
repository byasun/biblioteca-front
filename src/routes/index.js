// src/routes/index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LivroRoutes from './livroRoutes';
import UsuarioRoutes from './usuarioRoutes';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <LivroRoutes />
      <UsuarioRoutes />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default AppRoutes;
