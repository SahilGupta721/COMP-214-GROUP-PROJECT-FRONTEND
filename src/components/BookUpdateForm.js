import React, { useState } from 'react';
import { updateBook } from '../api/booksApi';

/**
 * Component to update book details (cost, retail price, category).
 */
const BookUpdateForm = ({ isbn }) => {
  const [updates, setUpdates] = useState({
    cost: '',
    retail: '',
    category: '',
  });

  const handleChange = (e) => {
    setUpdates({ ...updates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(isbn, updates); // API call to update book
      alert('Book updated successfully!');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Error updating book!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="cost" placeholder="Cost" value={updates.cost} onChange={handleChange} />
      <input name="retail" placeholder="Retail Price" value={updates.retail} onChange={handleChange} />
      <input name="category" placeholder="Category" value={updates.category} onChange={handleChange} />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default BookUpdateForm;
