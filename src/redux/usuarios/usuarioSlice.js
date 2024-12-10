import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: null,
  error: null,
};

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;  // Guarde o usuário
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);  // Guarde o token
      }
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.user = null;
    },
    cadastroError: (state, action) => {
      state.error = action.payload;
    },
    cadastroSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logout, cadastroError, cadastroSuccess } = usuarioSlice.actions;

export const cadastrarUsuario = (dadosUsuario) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/cadastrar', dadosUsuario);
    dispatch(cadastroSuccess(response.data));
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error.response || error.message);
    dispatch(cadastroError({
      message: error.response?.data?.message || 'Erro desconhecido',
      status: error.response?.status || 500,
    }));
    throw error;
  }
};

export default usuarioSlice.reducer;
