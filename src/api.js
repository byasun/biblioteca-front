import axios from 'axios';
import { apiUrl } from './api/config';
import { authInterceptor } from './api/authInterceptor';
import { responseInterceptor, errorInterceptor } from './api/responseInterceptor';

// Criar instância do axios
const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

// Adicionar interceptadores
api.interceptors.request.use(authInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;