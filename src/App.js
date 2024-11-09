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
    <div className="App flex flex-col items-center p-8 h-screen">
      <h1 className="text-3xl font-bold mb-6">Book Finder</h1>
      <div className="relative w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search by book title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 pr-10 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <svg
          className="absolute top-1/2 right-4 w-5 h-5 text-gray-400 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {loading ? (
        <div className="flex items-center justify-center mt-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default App;
