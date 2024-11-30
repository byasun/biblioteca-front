// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global/GlobalStyles';  // Estilos globais
import NavbarStyles from './styles/components/NavbarStyles';  // Estilos para a Navbar
import ButtonStyles from './styles/components/ButtonStyles';  // Estilos para botões
import store from './redux/store';  // Redux store
import Navbar from './styles/layout/Navbar';  // Componente Navbar
import AppRoutes from './routes';  // Rotas principais

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <NavbarStyles />
    <ButtonStyles />
    <Navbar />
    <AppRoutes />  {/* Renderiza as rotas dentro do AppRoutes */}
  </Provider>
);

export default App;
