export const fetchLivrosRequest = () => ({
    type: 'FETCH_LIVROS_REQUEST',
  });
  
  export const fetchLivrosSuccess = (livros) => ({
    type: 'FETCH_LIVROS_SUCCESS',
    payload: livros,
  });
  
  export const fetchLivrosFailure = (error) => ({
    type: 'FETCH_LIVROS_FAILURE',
    payload: error,
  });
  
  export const addLivro = (livro) => ({
    type: 'ADD_LIVRO',
    payload: livro,
  });  
  
  export const removeLivro = (livroId) => ({
    type: 'REMOVE_LIVRO',
    payload: livroId,
  });