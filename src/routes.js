import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import UserDashboard from './pages/usuarioDashboard';

const PrivateRoute = ({ children }) => {
  // Verificando se o usuário está autenticado, seja pelo Redux ou pelo localStorage
  const isAuthenticated = useSelector((state) => state.usuario.isAuthenticated) || !!localStorage.getItem('token');

  if (!isAuthenticated) {
    // Redireciona para a página de login se o usuário não estiver autenticado
    return <Navigate to="/login" />;
  }

  return children;
};

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/cadastro" element={<CadastroUsuario />} />
    
    {/* Rota protegida */}
    <Route 
      path="/dashboard" 
      element={
        <PrivateRoute>
          <UserDashboard />
        </PrivateRoute>
      } 
    />
  </Routes>
);

export default AppRoutes;
