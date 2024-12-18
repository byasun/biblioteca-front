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
    },
  },
});

export const { loginSuccess, loginFailure, logoutSuccess } = usuarioSlice.actions;

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

export const loginUsuario = (email, password) => async (dispatch) => {
  try {
    const data = await login({ email, password }); // Aqui chamamos a API
    console.log('Resposta do login:', data); // Verifique o que está sendo retornado
    dispatch(loginSuccess(data)); // Armazena o usuário e o token no estado global
    return data;
  } catch (error) {
    console.error('Erro ao realizar login:', error.message);
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    await logout();
    dispatch(logoutSuccess());
  } catch (error) {
    console.error('Erro ao realizar logout:', error.message);
    throw error;
  }
};

export default usuarioSlice.reducer;
