import store from '../redux/store';
import { logout } from '../redux/usuarios/usuarioActions';

export const responseInterceptor = (response) => response;
export const errorInterceptor = (error) => {
  if (error.response && error.response.status === 401) {
    // Remove o token e faz logout automaticamente
    store.dispatch(logout());
    window.location.href = '/login'; // Redireciona para a página de login
  }
  return Promise.reject(error);
};