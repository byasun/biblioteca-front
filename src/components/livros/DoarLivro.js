import React, { useState } from 'react';
import { addLivro } from '../../api/livroApi'; // Importando a função de API
import { useDispatch } from 'react-redux'; // Para disparar ações do Redux
import { addLivro as addLivroAction } from '../../redux/livros/livrosActions'; // Ação do Redux

const DoarLivro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [mensagem, setMensagem] = useState('');
  const dispatch = useDispatch(); // Hook para disparar ações do Redux

  const handleDoacao = async (e) => {
    e.preventDefault();
    try {
      const livro = { titulo, autor };
      // Fazendo a requisição para a API para adicionar o livro
      const novoLivro = await addLivro(livro);
      // Disparando a ação para atualizar o estado no Redux
      dispatch(addLivroAction(novoLivro));
      setMensagem('Livro doado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao doar o livro.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Doar Livro</h2>
      <form onSubmit={handleDoacao}>
        <label>
          Título:
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          Autor:
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </label>
        <button type="submit">Doar Livro</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default DoarLivro;
