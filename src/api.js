import axios from 'axios';

// Garantir que os cookies sejam enviados por padrão
axios.defaults.withCredentials = true;

// Definir a URL base adicionando o prefixo '/api'
const apiUrl = process.env.REACT_APP_API_URL;
const baseURL = `${apiUrl}/api`;

const api = axios.create({
  baseURL: baseURL, // Define a URL base incluindo o prefixo '/api'
});

// Interceptador de requisição para adicionar o token, se ele existir
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Adicionando token:', token); // Log para depuração
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
