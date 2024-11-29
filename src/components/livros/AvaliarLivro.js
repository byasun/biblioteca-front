import React, { useState } from 'react';

const AvaliarLivro = () => {
    const [nota, setNota] = useState(0);
    const [comentario, setComentario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar a avaliação
        console.log(`Nota: ${nota}, Comentário: ${comentario}`);
    };

    return (
        <div>
            <h2>Avaliar Livro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nota:
                    <input
                        type="number"
                        value={nota}
                        onChange={(e) => setNota(e.target.value)}
                        min="1"
                        max="5"
                    />
                </label>
                <label>
                    Comentário:
                    <textarea
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />
                </label>
                <button type="submit">Enviar Avaliação</button>
            </form>
        </div>
    );
};

export default AvaliarLivro;