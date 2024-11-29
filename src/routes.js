import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import UserDashboard from './pages/usuarioDashboard';
import PrivateRoute from './components/common/PrivateRoute';
import { ROUTES } from './routes/paths';
import Error404 from './pages/Error404';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.SIGNUP} element={<CadastroUsuario />} />
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <PrivateRoute>
          <UserDashboard />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Error404 />} /> {/* Rota para páginas não encontradas */}
  </Routes>
);

export default AppRoutes;