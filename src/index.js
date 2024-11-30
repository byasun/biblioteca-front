// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';  // Adicionando o Router aqui
import store from './redux/store';  // Redux store
import App from './App';  // Seu componente principal
import './styles/global/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provider envolta da aplicação para o Redux */}
      <Router>  {/* Router envolta da aplicação para gerenciamento de rotas */}
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
