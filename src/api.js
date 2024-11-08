const apiUrl = process.env.REACT_APP_API_URL;

axios.get(`${apiUrl}/api/rota`)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer requisição ao backend', error);
  });
