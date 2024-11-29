import axios from 'axios';
import { apiConfig } from 'src/config/apiConfig.js';

const api = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar login');
  }
};

export const register = async (userDetails) => {
  try {
    const response = await api.post('/auth/register', userDetails);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar o cadastro');
  }
};
