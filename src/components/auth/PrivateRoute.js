import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from '../../routes/paths';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.usuario.isAuthenticated);
  
  console.log("Autenticação:", isAuthenticated); // Depuração
  
  return isAuthenticated ? children : <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateRoute;