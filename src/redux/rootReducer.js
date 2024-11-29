import { combineReducers } from 'redux';
import livrosReducer from './livros/livroReducers';
import usuarioReducer from './usuarios/usuarioReducer';

const rootReducer = combineReducers({
    livros: livrosReducer,
    usuario: usuarioReducer,
    // Adicione outros reducers conforme necessário
});

export default rootReducer;