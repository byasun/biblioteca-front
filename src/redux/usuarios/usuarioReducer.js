// src/redux/usuarios/usuarioReducer.js

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
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
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
};

export default usuarioReducer;
