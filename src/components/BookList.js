import React, { useState, useEffect } from 'react';
import { getBooks, updateBook, deleteBook } from '../api/booksApi';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [updatedValues, setUpdatedValues] = useState({ category: '', cost: '', retail: '' });

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await getBooks();
        setBooks(booksData || []);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setEditingBook(book.isbn);
    setUpdatedValues({ category: book.category, cost: book.cost, retail: book.retail });
  };

  const handleUpdate = async (isbn) => {
    try {
      await updateBook(isbn, updatedValues);
      alert('Book updated successfully!');
      setEditingBook(null);
      const booksData = await getBooks();
      setBooks(booksData || []);
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book.');
    }
  };

  const handleDelete = async (isbn) => {
    try {
      await deleteBook(isbn);
      alert('Book deleted successfully!');
      setBooks(books.filter((book) => book.isbn !== isbn));
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book.');
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Retail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) =>
            editingBook === book.isbn ? (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>
                  <input
                    type="text"
                    value={updatedValues.category}
                    onChange={(e) => setUpdatedValues({ ...updatedValues, category: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={updatedValues.cost}
                    onChange={(e) => setUpdatedValues({ ...updatedValues, cost: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={updatedValues.retail}
                    onChange={(e) => setUpdatedValues({ ...updatedValues, retail: e.target.value })}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(book.isbn)}>Save</button>
                  <button onClick={() => setEditingBook(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>{book.cost}</td>
                <td>{book.retail}</td>
                <td>
                  <button onClick={() => handleEditClick(book)}>Edit</button>
                  <button onClick={() => handleDelete(book.isbn)}>Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
