import axios from 'axios';
import { apiConfig } from 'src/config/apiConfig.js';

const api = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsuario = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar usuário');
  }
};

export const updateUsuario = async (id, usuario) => {
  try {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar usuário');
  }
};
