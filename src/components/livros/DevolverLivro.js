import React from 'react';

const DevolverLivro = () => {
    const handleDevolucao = () => {
        // Lógica para devolver o livro
        console.log('Livro devolvido!');
    };

    return (
        <div>
            <h2>Devolver Livro</h2>
            <button onClick={handleDevolucao}>Devolver</button>
        </div>
    );
};

export default DevolverLivro;