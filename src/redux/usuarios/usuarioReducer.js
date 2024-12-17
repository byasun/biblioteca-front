import { LOGIN_SUCCESS, LOGOUT, CADASTRO_SUCCESS, CADASTRO_ERROR } from './usuarioTypes';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true, // Garante que o usuário está autenticado
        user: action.payload.user, // Atualiza o usuário corretamente
        error: null,
      };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: null,
        };
    case CADASTRO_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case CADASTRO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usuarioReducer;
