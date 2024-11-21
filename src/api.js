import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'https://supreme-rotary-phone-7j4qjwv6gvvfx5j4-8181.app.github.dev';

const api = axios.create({
  baseURL: apiUrl,
});

// Intercepta cada requisição para adicionar o token, se ele existir
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
