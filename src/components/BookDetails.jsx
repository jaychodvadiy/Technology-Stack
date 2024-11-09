import React from 'react';

function BookDetails({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/128x193?text=No+Cover';

  return (
    <div className="w-44 border border-gray-200 rounded-lg p-4 shadow-md bg-white cursor-pointer">
      <img src={coverUrl} alt={`${book.title} cover`} className="w-full h-48 object-cover rounded" />
      <div className="mt-2">
        <h3 className="text-sm font-semibold truncate">{book.title}</h3>
        <p className="text-xs text-gray-500">Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
        <p className="text-xs text-gray-500">First Published: {book.first_publish_year || 'N/A'}</p>
        <p className="text-sm font-semibold text-red-500 mt-2">$870</p>
      </div>
    </div>
  );
}

export default BookDetails;
