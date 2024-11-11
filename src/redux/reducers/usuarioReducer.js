const initialState = {
  isAuthenticated: false,
  user: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload, // Armazena as informações do usuário
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null, // Limpa as informações do usuário
      };
    default:
      return state; // Retorna o estado atual se a ação não for reconhecida
  }
};

export default usuarioReducer;