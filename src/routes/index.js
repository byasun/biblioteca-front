import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './paths';

import Home from '../pages/Home';
import Login from '../pages/Login';
import CadastroUsuario from '../pages/CadastroUsuario';
import Error404 from '../pages/Error404';
import UsuarioDashboard from '../pages/usuarioDashboard';

import PrivateRoute from '../components/auth/PrivateRoute';

import DetalhesLivro from '../components/livros/DetalhesLivro';
import AvaliarLivro from '../components/livros/AvaliarLivro';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.SIGNUP} element={<CadastroUsuario />} />

    <Route 
      path={ROUTES.DASHBOARD} 
      element={
        <PrivateRoute>
          <UsuarioDashboard />
        </PrivateRoute>
      } 
    />

    <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />
    <Route path="/livros/avaliar/:id" element={<AvaliarLivro />} />

    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;