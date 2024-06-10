// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import MyBookshelf from './pages/MyBookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (bookToRemove) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookToRemove.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<BookSearch onAddToBookshelf={addToBookshelf} bookshelf={bookshelf} />} />
          <Route path="/my-bookshelf" element={<MyBookshelf bookshelf={bookshelf} onRemoveFromBookshelf={removeFromBookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
