import React from 'react';
import styled from 'styled-components';

const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const BookCard = styled.div`
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const BookList = ({ books }) => {
  return (
    <BookListContainer>
      {books.map((book) => (
        <BookCard key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </BookCard>
      ))}
    </BookListContainer>
  );
};

export default BookList;