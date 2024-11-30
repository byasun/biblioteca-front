// src/redux/rootReducer.js

import { combineReducers } from 'redux';
import livrosReducer from './livros/livroReducers';
import usuarioReducer from './usuarios/usuarioSlice'; // Atualizado para o usuarioSlice

const rootReducer = combineReducers({
  livros: livrosReducer,
  usuario: usuarioReducer,
});

export default rootReducer;
