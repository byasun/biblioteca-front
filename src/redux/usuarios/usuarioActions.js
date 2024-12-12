import { CADASTRO_SUCCESS, CADASTRO_ERROR, LOGIN_SUCCESS, LOGOUT, LOGIN_FAILURE } from './usuarioTypes';
import api from '../../api'; // ou onde você configurou o axios

// Ação para fazer o login
export const loginSuccess = (usuario) => ({
  type: LOGIN_SUCCESS,
  payload: usuario,
});

// Ação para falha no login
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Ação para fazer logout
export const logout = () => ({
  type: LOGOUT,
});

// Ação de sucesso no cadastro
export const cadastroSuccess = (usuario) => ({
  type: CADASTRO_SUCCESS,
  payload: usuario,
});

// Ação de erro no cadastro
export const cadastroError = (error) => ({
  type: CADASTRO_ERROR,
  payload: error,
});

// Função assíncrona para cadastrar o usuário
export const cadastrarUsuario = (dadosUsuario) => async (dispatch) => {
  try {
    const response = await api.post('/api/usuarios/cadastrar', dadosUsuario);
    dispatch(cadastroSuccess(response.data));
    return response.data;
  } catch (error) {
    dispatch(cadastroError(error.response?.data || error.message));
    throw error;
  }
};

// Ação assíncrona para fazer login
export const loginUsuario = (email, password) => async (dispatch) => {
  try {
    const response = await api.post('/usuarios/login', { email, password });
    const { token, user } = response.data;

    // Salvar token no localStorage
    localStorage.setItem('token', token);

    // Despachar a ação de sucesso
    dispatch(loginSuccess({ token, user }));
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    dispatch(loginFailure(error.response?.data || 'Erro ao fazer login'));
    throw error;
  }
};
