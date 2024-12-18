import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import UsuarioDashboard from '../pages/usuarioDashboard';
import PrivateRoute from '../components/auth/PrivateRoute';
import { ROUTES } from './paths';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <PrivateRoute>
          <UsuarioDashboard />
        </PrivateRoute>
      }
    />

    <Route path="/livros/*" element={<div>Livro Routes</div>} /> 
    <Route path="/usuarios/*" element={<div>Usuario Routes</div>} />

    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;