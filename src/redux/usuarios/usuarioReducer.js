import { LOGIN_SUCCESS, LOGOUT, CADASTRO_SUCCESS, CADASTRO_ERROR } from './usuarioTypes';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: null,
  error: null,
};

const usuarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
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
