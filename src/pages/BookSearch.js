// src/pages/BookSearch.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Popup from '../components/Popup';
import Loader from '../components/Loader';
import { fetchBooks } from '../api';
import './BookSearch.css';

const BookSearch = ({ onAddToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (query.length > 2) {
      setLoading(true);
      const newTimer = setTimeout(async () => {
        try {
          console.log('Fetching books...');
          const books = await fetchBooks(query);
          console.log('Books:', books);
          setResults(books);
        } catch (error) {
          console.error('Error fetching books:', error);
          setResults([]);
        } finally {
          setLoading(false); 
        }
      }, 300); 
      return () => clearTimeout(newTimer); 
    } else {
      setResults([]);
    }
  }, [query, timer]);

  const handleAddToBookshelf = (book) => {
    onAddToBookshelf(book);
    setPopup(true);
    setTimeout(() => setPopup(false), 2000); 
  };

  return (
    <div className="book-search">
        <a href="/my-bookshelf">Go to My Bookshelf</a>
      <SearchBar query={query} onChange={setQuery} />
      {loading && <Loader />}
      <div className="results">
        {results.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onAdd={handleAddToBookshelf}
            isAdded={bookshelf.some(b => b.key === book.key)}
          />
        ))}
      </div>
      
      {popup && <Popup message="Book added to your bookshelf!" onClose={() => setPopup(false)} />}
    </div>
  );
};

export default BookSearch;
