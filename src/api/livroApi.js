import axios from 'axios';
import { apiConfig } from 'src/config/apiConfig.js';

const api = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getLivros = async () => {
  try {
    const response = await api.get('/livros');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar livros');
  }
};

export const addLivro = async (livro) => {
  try {
    const response = await api.post('/livros', livro);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar livro');
  }
};

export const updateLivro = async (id, livro) => {
  try {
    const response = await api.put(`/livros/${id}`, livro);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar livro');
  }
};

export const deleteLivro = async (id) => {
  try {
    const response = await api.delete(`/livros/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar livro');
  }
};
