import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from '../redux/usuarios/usuarioActions';
import InputField from '../components/ui/inputs/InputFields';
import ErrorMessage from '../components/common/ErrorMessage';
import PrimaryButton from '../components/ui/buttons/PrimaryButton';
import { ROUTES } from '../routes/paths';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage('');
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const result = await dispatch(loginUsuario(email, password));
      console.log('Usuário logado:', result);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      console.error('Erro ao fazer login:', error.message || error.response?.data);
      setErrorMessage(error.message || 'Falha no login. Verifique suas credenciais.');
    }
  };  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form-container">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </form>
    </div>
  );
};

export default Login;
