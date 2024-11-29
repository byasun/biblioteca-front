import React, { useState } from 'react';

const DoarLivro = () => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');

    const handleDoacao = (e) => {
        e.preventDefault();
        // Lógica para doar o livro
        console.log(`Livro doado: ${titulo} por ${autor}`);
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
        </div>
    );
};

export default DoarLivro;