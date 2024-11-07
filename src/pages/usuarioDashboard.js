import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api';
import styled from 'styled-components';
import moment from 'moment';
import Button from '../components/Button';
import { logout } from '../store/usuarioReducer';

const Container = styled.div`
  padding: 2rem;
`;

const EstanteSection = styled.div`
  margin-top: 2rem;
`;

const EstanteItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
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

  return (
    <Container>
      <h2>Dashboard do Usuário</h2>
      <p>Nome: {user.nome}</p>
      <p>Email: {user.email}</p>

      <EstanteSection>
        <h3>Estante</h3>
        {estante.length > 0 ? (
          estante.map(item => (
            <EstanteItem key={item._id}>
              <p>Título: {item.titulo}</p>
              <p>Status: {item.status}</p>
              {item.dataEmprestimo && (
                <p>Data de Empréstimo: {moment(item.dataEmprestimo).format('DD/MM/YYYY')}</p>
              )}
              {item.dataDevolucao && (
                <p>Data de Devolução: {moment(item.dataDevolucao).format('DD/MM/YYYY')}</p>
              )}
              {item.avaliacao && (
                <p>Avaliação: {item.avaliacao} estrelas</p>
              )}
              {item.comentario && (
                <p>Comentário: {item.comentario}</p>
              )}
              {item.quote && (
                <p>Quote: "{item.quote}"</p>
              )}
              <Button onClick={() => handleRemove(item._id)}>Remover</Button>
            </EstanteItem>
          ))
        ) : (
          <p>Nenhum livro na estante.</p>
        )}
      </EstanteSection>
    </Container>
  );
};

export default UserDashboard;