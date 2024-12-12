const initialState = {
  livros: [],
  loading: false,
  error: null,
};

// Função reducer
const livrosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LIVROS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_LIVROS_SUCCESS":
      return {
        ...state,
        loading: false,
        livros: action.payload, // Armazena a lista de livros
      };
    case "FETCH_LIVROS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload, // Armazena o erro
      };
    case "ADD_LIVRO":
      return {
        ...state,
        livros: [...state.livros, action.payload], // Adiciona o novo livro
      };      
    case "REMOVE_LIVRO":
      return {
        ...state,
        livros: state.livros.filter((livro) => livro.id !== action.payload), // Remove um livro pelo ID
      };
    default:
      return state; // Retorna o estado atual se a ação não for reconhecida
  }
};

export default livrosReducer;
