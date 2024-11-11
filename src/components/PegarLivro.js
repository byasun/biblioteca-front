import React from 'react';

const PegarLivro = () => {
    const handlePegar = () => {
        // Lógica para pegar o livro
        console.log('Livro pegado!');
    };

    return (
        <div>
            <h2>Pegar Livro</h2>
            <button onClick={handlePegar}>Pegar Livro</button>
        </div>
    );
};

export default PegarLivro;