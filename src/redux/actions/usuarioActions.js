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
