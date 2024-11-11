import { combineReducers } from 'redux';
import userReducer from './reducers/usuarioReducer'; // Importa o reducer do usuário

const rootReducer = combineReducers({
  user: userReducer, // Combina o reducer do usuário
});

export default rootReducer; // Exporta o rootReducer