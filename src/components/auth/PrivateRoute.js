import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.usuario);

  if (isAuthenticated === false) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return isAuthenticated ? children : <div>Carregando...</div>;
};

export default PrivateRoute;