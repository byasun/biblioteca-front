import axios from 'axios';

// Garantir que os cookies sejam enviados por padrão
axios.defaults.withCredentials = true;

// Definir o baseURL uma vez, pegando da variável de ambiente
const apiUrl = process.env.REACT_APP_API_URL.replace(/\/$/, ""); // Remove a barra final, se houver


const api = axios.create({
  baseURL: apiUrl,  // Usando a variável de ambiente para definir o backend
});

// Interceptador de requisição para adicionar o token, se ele existir
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Adicionando token:', token);  // Log para depuração
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
