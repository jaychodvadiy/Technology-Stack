import React from 'react';

function BookDetails({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/128x193?text=No+Cover';

  return (
    <div className="book">
      <img src={coverUrl} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookDetails;
