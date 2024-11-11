import React from 'react';
import GlobalStyles from './styles/GlobalStyles'; // Importa os estilos globais
import Navbar from './components/Navbar';
import AppRoutes from './routes';

const App = () => (
  <div>
    <GlobalStyles /> {/* Aplica os estilos globais */}
    <Navbar />
    <AppRoutes />
  </div>
);

export default App;