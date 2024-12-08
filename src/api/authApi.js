import axios from 'axios';
import { apiConfig } from '../config/apiConfig';  // Importar a configuração da API

const api = axios.create({
  baseURL: apiConfig.baseURL,  // Usar a URL base da API configurada
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post('/usuarios/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar login');
  }
};

export const register = async (userDetails) => {
  try {
    const response = await api.post('/usuarios/cadastrar', userDetails);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar o cadastro');
  }
};