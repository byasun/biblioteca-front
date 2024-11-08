import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Button from '../components/Button';
import api from '../api';

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  text-align: center;
`;

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const registrarUsuarioNoBackend = async () => {
      if (isAuthenticated) {
        try {
          // Obtenha o token de autenticação
          const tokenClaims = await getIdTokenClaims();
          const token = tokenClaims ? tokenClaims.__raw : null;

          // Envie os dados para o backend com o token
          await api.post('/usuarios/registrar', 
            { 
              nome: user.name, 
              email: user.email 
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
        } catch (error) {
          console.error('Erro ao registrar usuário no backend:', error);
        }
      }
    };

    registrarUsuarioNoBackend();
  }, [isAuthenticated, user, getIdTokenClaims]);

  if (isAuthenticated) {
    return (
      <Container>
        <h2>Você já está logado!</h2>
        <p>Bem-vindo, {user.name}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Login</h2>
      <Button onClick={() => loginWithRedirect()}>Entrar com Auth0</Button>
    </Container>
  );
};

export default Login;
