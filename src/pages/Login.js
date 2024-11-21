import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/actions/usuarioActions';
import api from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Limpa a mensagem de erro sempre que o componente for renderizado
  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);
  
  const handleLogin = async (e) => {
    e.preventDefault();
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
      console.error('Erro ao fazer login:', error.response || error);

      // Verificando se a resposta de erro contém uma mensagem específica
      setErrorMessage(error.response?.data?.message || "Falha no login. Verifique suas credenciais.");
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
