import React, { useEffect, useState } from 'react';
import { getBooks } from '../api/booksApi';
import './BookList.css';

/**
 * Component to display the list of books.
 */
const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks(); // API call to fetch books
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <table className="book-list">
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Title</th>
          <th>Category</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
            <td>{book.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
