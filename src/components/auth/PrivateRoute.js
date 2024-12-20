import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.usuario);

  if (isAuthenticated === undefined) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return children;
};

export default PrivateRoute;