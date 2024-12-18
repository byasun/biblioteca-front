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

export const loginUsuario = (email, password) => async (dispatch) => {
  try {
    const data = await login({ email, password });
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export const logoutUsuario = () => async (dispatch) => {
  try {
    await logout();
    dispatch(logoutSuccess());
  } catch (error) {
    console.error('Erro ao realizar logout:', error.message);
    throw error;
  }
};

export default usuarioSlice.reducer;
