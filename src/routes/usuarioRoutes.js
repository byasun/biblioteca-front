import React from 'react';
import { Route } from 'react-router-dom';
import { UsuarioDashboard, CadastroUsuario } from '../components/usuarios';  // Componentes para dashboard e cadastro de usuário

const UsuarioRoutes = () => (
  <>
    <Route path="/app/usuarios/dashboard" element={<UsuarioDashboard />} />
    <Route path="/app/usuarios/cadastrar" element={<CadastroUsuario />} />
  </>
);

export default UsuarioRoutes;
