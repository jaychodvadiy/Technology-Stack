import React from 'react';
import BookDetails from './BookDetails';

function BookList({ books }) {
  return (
   <>
    {books.length > 0 ? ( <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Best Selling Items</h2>
     
        <div className="flex flex-wrap justify-center gap-4">
          {books.map((book) => (
            <BookDetails key={book.key} book={book} />
          ))}
        </div>
    
    </div>
) : (
    <div className="flex flex-col items-center justify-center w-full h-full text-center bg-gray-100 rounded-lg p-8">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 mb-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
</svg>

      <h3 className="text-2xl font-semibold text-gray-700 mb-2">No books found</h3>
      <p className="text-gray-500">Try a different search!</p>
    </div>
  )}
   </>
  );
}

export default BookList;
