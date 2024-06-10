// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, onChange }) => (
  <div className="search-bar">
    <input 
      type="text" 
      placeholder="Search for a book..." 
      value={query} 
      onChange={(e) => onChange(e.target.value)} 
    />
  </div>
);

export default SearchBar;
