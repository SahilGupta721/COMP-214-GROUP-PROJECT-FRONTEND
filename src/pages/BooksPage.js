import React from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

/**
 * Page for managing books.
 */
const BooksPage = () => (
  <div>
    <h1>Books Management</h1>
    <BookForm />
  </div>
);

export default BooksPage;
