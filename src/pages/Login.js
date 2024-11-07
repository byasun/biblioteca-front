import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import Button from '../components/Button';

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
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

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