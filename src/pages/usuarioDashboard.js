import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../api';
import moment from 'moment';
import { logout } from '../redux/actions/usuarioActions';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const EstanteSection = styled.div`
  margin-top: 2rem;
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
      <h2>Perfil do Usuário</h2>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Email:</strong> {user.email}</p>

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
      <button className="primary-button" onClick={() => dispatch(logout())}>Logout</button>
    </Container>
  );
};

export default UserDashboard;
