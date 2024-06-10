// src/components/Bookshelf.js
import React from 'react';

const Bookshelf = ({ books, onRemove }) => (
  <div className="bookshelf">
    {books.length === 0 ? (
      <p>No books in the bookshelf</p>
    ) : (
      books.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>Author: {book.author_name?.join(', ')}</p>
          <button onClick={() => onRemove(book)}>Remove from Bookshelf</button>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
