import React from 'react';
import BookDetails from './BookDetails';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <BookDetails key={book.key} book={book} />
        ))
      ) : (
        <p>No books found. Try a different search!</p>
      )}
    </div>
  );
}

export default BookList;
