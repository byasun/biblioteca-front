import api from '../../api';

// Ação de sucesso no cadastro
export const cadastroSuccess = (user) => ({
  type: 'CADASTRO_SUCCESS',
  payload: user,
});

// Ação de erro no cadastro
export const cadastroError = (error) => ({
  type: 'CADASTRO_ERROR',
  payload: error,
});

// Ação para cadastrar um novo usuário
export const cadastrarUsuario = (dadosUsuario) => async (dispatch) => {
  try {
    const response = await api.post('/usuarios/registrar', dadosUsuario);
    
    // Sucesso no cadastro
    dispatch(cadastroSuccess(response.data));
    return response.data; // Retorna o usuário criado, caso necessário
  } catch (error) {
    console.error('Erro ao cadastrar o usuário:', error.response || error.message);
    dispatch(cadastroError(error.response?.data || 'Erro desconhecido'));
    throw error; // Permite tratar o erro no componente
  }
};

export const loginSuccess = (user) => {
  // Salva o token no localStorage para persistência de sessão
  if (user?.token) {
    localStorage.setItem('token', user.token);
  }

  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const logout = () => {
  // Remove o token do localStorage ao fazer logout
  localStorage.removeItem('token');

  return {
    type: 'LOGOUT',
  };
};
