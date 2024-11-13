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
        user: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default usuarioReducer;
