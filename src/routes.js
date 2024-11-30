// src/routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import UserDashboard from './pages/usuarioDashboard';
import DetalhesLivro from './components/livros/DetalhesLivro';
import AvaliarLivro from './components/livros/AvaliarLivro';
import PrivateRoute from './components/auth/PrivateRoute';
import { ROUTES } from './routes/paths';

const AppRoutes = () => (
  <Routes>
    {/* Rotas principais */}
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.SIGNUP} element={<CadastroUsuario />} />

    {/* Rotas protegidas */}
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <PrivateRoute>
          <UserDashboard />
        </PrivateRoute>
      }
    />

    {/* Rotas de livros */}
    <Route path="/livros/detalhes/:id" element={<DetalhesLivro />} />
    <Route path="/livros/avaliar/:id" element={<AvaliarLivro />} />

    {/* Página de erro */}
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
