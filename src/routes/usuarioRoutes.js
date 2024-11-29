import React from 'react';
import { Route } from 'react-router-dom';
import { UsuarioDashboard, CadastroUsuario } from '../components/usuarios';

const UsuarioRoutes = () => (
  <>
    <Route path="/usuarios/dashboard" element={<UsuarioDashboard />} />
    <Route path="/usuarios/cadastro" element={<CadastroUsuario />} />
  </>
);

export default UsuarioRoutes;
