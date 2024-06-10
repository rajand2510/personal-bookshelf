// src/pages/MyBookshelf.js
import React from 'react';
import Bookshelf from '../components/Bookshelf';
import './MyBookshelf.css';

const MyBookshelf = ({ bookshelf, onRemoveFromBookshelf }) => {
  return (
    <div className="my-bookshelf">
      <h2 className="my-bookshelf-title">My Bookshelf</h2>
      <a href="/" className="my-bookshelf-link">Go back to Search</a>
      <Bookshelf books={bookshelf} onRemove={onRemoveFromBookshelf} />
    </div>
  );
};

export default MyBookshelf;
