// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';  // Importa a nova store configurada com Redux Toolkit
import App from './App';
import './styles/global/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Passando a store para o Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
