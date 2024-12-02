// src/routes/usuarioRoutes.js
import React from 'react';
import { Route } from 'react-router-dom';
import { UsuarioDashboard, CadastroUsuario } from '../components/usuarios';  // Componentes para dashboard e cadastro de usuário

const UsuarioRoutes = () => (
  <>
    <Route path="/usuarios/dashboard" element={<UsuarioDashboard />} />  {/* Rota para o dashboard do usuário */}
    <Route path="/usuarios/cadastrar" element={<CadastroUsuario />} />  {/* Rota para cadastro do usuário */}
  </>
);

export default UsuarioRoutes;
