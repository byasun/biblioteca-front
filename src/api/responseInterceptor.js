import { useNavigate } from 'react-router-dom';

export const errorInterceptor = (error) => {
  const navigate = useNavigate();

  if (error.response && error.response.status === 401) {
    localStorage.removeItem('token');
    navigate('/login'); // Usando o navigate para redirecionamento
  }

  return Promise.reject(error);
};
