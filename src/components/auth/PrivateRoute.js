import React,{ useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.usuario);

  useEffect(() => {
    if (!isAuthenticated) {
      console.warn('Usuário não autenticado, redirecionando para login.');
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  if (!user) {
    return <div>Carregando...</div>;
  }

  return children;
};

export default PrivateRoute;