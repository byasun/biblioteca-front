import axios from 'axios';  // Certifique-se de que o axios está importado

const apiUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiUrl,
});

api.get('/api/rota')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer requisição ao backend', error);
  });

// Exportando o axios configurado
export default api;
