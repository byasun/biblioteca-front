import React from 'react';

const DetalhesLivro = ({ livro }) => {
    return (
        <div>
            <h2>{livro.titulo}</h2>
            <p>Autor: {livro.autor}</p>
            <p>Descrição: {livro.descricao}</p>
            <p>Ano: {livro.ano}</p>
            {/* Adicione mais detalhes conforme necessário */}
        </div>
    );
};

export default DetalhesLivro;