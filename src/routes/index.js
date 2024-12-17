import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import UsuarioDashboard from '../pages/usuarioDashboard';
import PrivateRoute from '../components/auth/PrivateRoute';
import { ROUTES } from './paths';

const AppRoutes = () => (
  <Routes>
    {/* Rotas estáticas */}
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <PrivateRoute>
          <UsuarioDashboard />
        </PrivateRoute>
      }
    />

    {/* Outras rotas (dinâmicas) */}
    <Route path="/livros/*" element={<div>Livro Routes</div>} /> {/* Substitua pelo real */}
    <Route path="/usuarios/*" element={<div>Usuario Routes</div>} /> {/* Substitua pelo real */}

    {/* Rota de erro 404 */}
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;