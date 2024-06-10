// src/components/BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onAdd, isAdded }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>Author: {book.author_name?.join(', ')}</p>
    {isAdded ? (
      <button disabled>Added</button>
    ) : (
      <button onClick={() => onAdd(book)}>Add to Bookshelf</button>
    )}
  </div>
);

export default BookCard;
