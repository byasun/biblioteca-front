import { combineReducers } from 'redux';
import livrosReducer from './livroReducers';
import usuarioReducer from './usuarioReducer';

const rootReducer = combineReducers({
    livros: livrosReducer,
    usuario: usuarioReducer,
    // Adicione outros reducers conforme necessário
});

export default rootReducer;