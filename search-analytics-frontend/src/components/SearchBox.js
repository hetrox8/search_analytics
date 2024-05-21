// src/components/SearchBox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (query.length > 0) {
      if (timer) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        axios.post('http://localhost:3000/search_queries', { query })
          .catch(error => console.error('Error logging search query:', error));
      }, 500);
      setTimer(newTimer);
    }
  }, [query]);

  return (
    <input
      type="text"
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search for articles..."
    />
  );
};

export default SearchBox;
