import React from 'react';
import { Provider } from 'react-redux';  // Para acessar o Redux Store
import { BrowserRouter } from 'react-router-dom';  // Para lidar com as rotas
import store from './redux/store';  // Importe a store do Redux
import GlobalStyles from './styles/GlobalStyles'; // Importa os estilos globais
import Navbar from './components/Navbar';  // Importe a Navbar
import AppRoutes from './routes';  // Importe as rotas

const App = () => (
  <Provider store={store}>  {/* Fornece o estado global do Redux para a aplicação */}
    <BrowserRouter>  {/* Gerencia as rotas no React */}
      <GlobalStyles /> {/* Aplica os estilos globais */}
      <Navbar />  {/* Renderiza a barra de navegação */}
      <AppRoutes />  {/* Renderiza as rotas */}
    </BrowserRouter>
  </Provider>
);

export default App;
