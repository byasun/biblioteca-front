import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/global/GlobalStyles'; // Estilos globais
import NavbarStyles from './styles/components/NavbarStyles'; // Estilos da Navbar
import ButtonStyles from './styles/components/ButtonStyles'; // Estilos para botões
import store from './redux/store';
import Navbar from './styles/layout/Navbar'; // Navbar como componente funcional
import AppRoutes from './routes'; // Rotas principais

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <NavbarStyles />
    <ButtonStyles />
    <Navbar />
    <AppRoutes />
  </Provider>
);

export default App;