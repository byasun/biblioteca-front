import React from 'react';

const QuoteLivro = ({ quote }) => {
    return (
        <div>
            <h2>Citação do Livro</h2>
            < p>{quote}</p>
        </div>
    );
};

export default QuoteLivro;