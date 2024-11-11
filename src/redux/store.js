import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Middleware para ações assíncronas
import rootReducer from './reducers/rootReducers'; // Importa o rootReducer do arquivo index.js

// Configuração do Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Criação da loja Redux
const store = createStore(
  rootReducer, // O reducer raiz que combina todos os reducers
  composeEnhancers(applyMiddleware(thunk)) // Aplica middleware e habilita o Redux DevTools
);

export default store; 