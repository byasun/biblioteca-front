import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/actions/usuarioActions';
import api from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para exibir mensagens de erro
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Limpar a mensagem de erro antes de cada nova tentativa
    try {
      const response = await api.post('/login', { email, password });
      const { token, user } = response.data;

      // Salva o token no localStorage
      localStorage.setItem('token', token);

      // Atualiza o estado global do usuário
      dispatch(loginSuccess(user));

      // Redireciona para o dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <div className="login-container" style={{ marginTop: '100px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="login-form-field">
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="login-form-field">
          <label>Senha</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>} {/* Exibe mensagem de erro */}
        <button type="submit" className="primary-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
