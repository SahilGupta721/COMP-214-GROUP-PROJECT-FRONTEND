import React, { useState, useEffect } from 'react';
import { getBooks, updateBook, deleteBook } from '../api/booksApi';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [updatedValues, setUpdatedValues] = useState({ category: '', cost: '', retail: '' });
  const [error, setError] = useState(''); // To show error messages

  useEffect(() => {
    async function fetchBooks() {
      try {
        const booksData = await getBooks();
        console.log('Fetched books data:', booksData); // Log the result for inspection
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        } else {
          // If the response is not an array, handle accordingly (fallback to empty array or error)
          setBooks([]);
          setError('Received invalid data format from the API.');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        setError('Error fetching books. Please try again.');
      }
    }
    fetchBooks();
  }, []);
  

  const handleEditClick = (book) => {
    setEditingBook(book.isbn);
    setUpdatedValues({ category: book.category, cost: book.cost, retail: book.retail });
  };

  const handleUpdate = async (isbn) => {
    // Basic validation
    if (!updatedValues.category || !updatedValues.cost || !updatedValues.retail) {
      setError('All fields must be filled!');
      return;
    }
    if (isNaN(updatedValues.cost) || isNaN(updatedValues.retail)) {
      setError('Cost and Retail prices must be valid numbers!');
      return;
    }
    
    try {
      await updateBook(isbn, updatedValues);
      alert('Book updated successfully!');
      setEditingBook(null);
      setUpdatedValues({ category: '', cost: '', retail: '' }); // Reset updated values
      const booksData = await getBooks();
      setBooks(booksData || []);
      setError(''); // Reset error message
    } catch (error) {
      console.error('Error updating book:', error);
      setError('Failed to update book. Please try again.');
    }
  };

  const handleDelete = async (isbn) => {
    try {
      await deleteBook(isbn);
      alert('Book deleted successfully!');
      setBooks(books.filter((book) => book.isbn !== isbn));
    } catch (error) {
      console.error('Error deleting book:', error);
      setError('Failed to delete book. Please try again.');
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
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
                  <button onClick={() => { setEditingBook(null); setUpdatedValues({ category: '', cost: '', retail: '' }); }}>Cancel</button>
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
