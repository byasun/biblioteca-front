import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api';
import moment from 'moment';
import { logout } from '../redux/usuarios/usuarioActions';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const EstanteSection = styled.div`
  margin-top: 2rem;
`;

const UserDashboard = () => {
  const dispatch = useDispatch();
const { user, isAuthenticated } = useSelector((state) => state.usuario);

if (!user) {
  return <div>Carregando...</div>; // Ou redirecione para o login
}

  const [estante, setEstante] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      api.get(`/usuarios/${user._id}/estante`)
        .then(response => {
          setEstante(response.data);
        })
        .catch(error => {
          console.error('Erro ao obter estante:', error);
        });
    }
  }, [isAuthenticated, user]);

  const handleRemove = (id) => {
    api.delete(`/usuarios/${user._id}/estante/remover/${id}`)
      .then(response => {
        setEstante(estante.filter(item => item._id !== id));
      })
      .catch(error => {
        console.error('Erro ao remover livro:', error);
      });
  };

  const handleLogout = () => {
    dispatch(logout()); // Remove autenticação do estado global
    navigate(ROUTES.LOGIN); // Redireciona para a página de login
  };

  return (
    <Container>
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {user.nome}</p>

      <EstanteSection>
        <h3>Sua Estante</h3>
        {estante.length > 0 ? (
          estante.map(item => (
            <div className="estante-item" key={item._id}>
              <p><strong>Título:</strong> {item.titulo}</p>
              <p><strong>Status:</strong> {item.status}</p>
              {item.dataEmprestimo && (
                <p><strong>Data de Empréstimo:</strong> {moment(item.dataEmprestimo).format('DD/MM/YYYY')}</p>
              )}
              {item.dataDevolucao && (
                <p><strong>Data de Devolução:</strong> {moment(item.dataDevolucao).format('DD/MM/YYYY')}</p>
              )}
              {item.avaliacao && (
                <p><strong>Avaliação:</strong> {item.avaliacao} estrelas</p>
              )}
              {item.comentario && (
                <p><strong>Comentário:</strong> {item.comentario}</p>
              )}
              {item.quote && (
                <p><strong>Quote:</strong> "{item.quote}"</p>
              )}
              <button className="primary-button" onClick={() => handleRemove(item._id)}>Remover</button>
            </div>
          ))
        ) : (
          <p>Nenhum livro na estante.</p>
        )}
      </EstanteSection>
      <button className="primary-button" onClick={handleLogout}>Logout</button>
    </Container>
  );
};

export default UserDashboard;
