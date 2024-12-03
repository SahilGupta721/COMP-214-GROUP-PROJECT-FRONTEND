import React, { useState, useEffect } from 'react';
import { getBooks } from '../api/booksApi';

/**
 * Component to display a list of books with search functionality.
 */
const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchBooks() {
      try {
        const fetchedBooks = await getBooks(); // Fetch books from the API
        setBooks(fetchedBooks || []); // Ensure books is an array
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  // Safely filter books by ensuring title and isbn are defined
  const filteredBooks = books.filter(
    (book) =>
      (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (book.isbn && book.isbn.includes(searchTerm))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Title or ISBN"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Category</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
