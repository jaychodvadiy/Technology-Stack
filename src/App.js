import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      setLoading(true);
      axios.get(`https://openlibrary.org/search.json?title=${query}`)
        .then((response) => {
          setBooks(response.data.docs);
          setLoading(false);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <input
        type="text"
        placeholder="Search by book title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default App;
