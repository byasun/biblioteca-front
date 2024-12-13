import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.usuario.isAuthenticated);

  // Verifica se o usuário está autenticado; caso contrário, redireciona para login
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;