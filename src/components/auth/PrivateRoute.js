import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.usuario);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  if (!user) {
    return <div>Carregando...</div>;
  }

  return children;
};

export default PrivateRoute;