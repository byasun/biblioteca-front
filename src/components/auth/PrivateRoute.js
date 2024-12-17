import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.usuario);

  if (isAuthenticated === null) {
    return <div>Carregando...</div>; // Mostra um "loading" até o estado ser carregado
  }

  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;