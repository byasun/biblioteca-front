import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import api from '../api';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const registrarUsuarioNoBackend = async () => {
      if (isAuthenticated) {
        try {
          const tokenClaims = await getIdTokenClaims();
          const token = tokenClaims ? tokenClaims.__raw : null;

          await api.post('/usuarios/registrar', 
            { nome: user.name, email: user.email },
            { headers: { Authorization: `Bearer ${token}` } }
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
      <div className="login-container">
        <h2>Bem-vindo de volta!</h2>
        <p>Você já está logado como {user.name}</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        loginWithRedirect();
      }}>
        <div className="login-form-field">
          <label>Email</label>
          <input className="login-input" type="email" placeholder="Digite seu email" required />
        </div>
        <div className="login-form-field">
          <label>Senha</label>
          <input className="login-input" type="password" placeholder="Digite sua senha" required />
        </div>
        <button className="login-button" type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
