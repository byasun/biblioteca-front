import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user; // Armazena o usuário
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token); // Salva o token
        localStorage.setItem('user', JSON.stringify(action.payload.user)); // Salva o usuário
      }
    },
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Remove o usuário
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = usuarioSlice.actions;

export const cadastrarUsuario = (dadosUsuario) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/cadastrar', dadosUsuario);
    dispatch(loginSuccess(response.data));
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error.response || error.message);
    dispatch(loginFailure({
      message: error.response?.data?.message || 'Erro desconhecido',
      status: error.response?.status || 500,
    }));
    throw error;
  }
};

export const loginUsuario = (email, password) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/login', { email, password });
    const { token, user } = response.data;
    dispatch(loginSuccess({ token, user })); // Armazena no Redux
    return response.data;
  } catch (error) {
    console.error('Erro ao realizar login:', error.response || error.message);
    dispatch(loginFailure(error.response?.data?.message || 'Erro ao realizar login.'));
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    // Qualquer lógica adicional para logout no backend pode ser adicionada aqui
    dispatch(logoutSuccess());
  } catch (error) {
    console.error('Erro ao realizar logout:', error.message);
    throw error;
  }
};

export default usuarioSlice.reducer;