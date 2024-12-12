import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';  // Importa o rootReducer atualizado

const store = configureStore({
  reducer: rootReducer,
});

export default store;
