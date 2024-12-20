import React from 'react';
import { Route } from 'react-router-dom';
import { CadastroUsuario } from '../components/usuarios';  

const UsuarioRoutes = () => (
  <>
    <Route path="/app/usuarios/cadastrar" element={<CadastroUsuario />} />
  </>
);

export default UsuarioRoutes;
