const initialState = {
  isAuthenticated: !!localStorage.getItem('token'), // Verifica se o token está presente no localStorage
  user: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      // Limpa o token do localStorage quando o usuário sair
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
};

export default usuarioReducer;
