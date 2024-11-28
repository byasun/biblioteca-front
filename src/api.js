import axios from 'axios';

// Garantir que os cookies sejam enviados por padrão
axios.defaults.withCredentials = true;

const apiUrl = process.env.REACT_APP_API_URL || "https://biblioteca-comunitaria.azurewebsites.net/api";

const api = axios.create({
  baseURL: apiUrl, // Usa o valor configurado no .env ou o valor padrão
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
