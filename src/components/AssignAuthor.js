import React, { useState } from 'react';
import { registerAuthor } from '../api/authorsApi';

/**
 * Component to assign an author to a book.
 */
const AssignAuthor = () => {
  // State to store form input values
  const [form, setForm] = useState({ isbn: '', authorId: '' });

  // Handle input changes and update the state
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission to register author assignment
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerAuthor(form); // API call to assign the author
      alert('Author assigned successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to assign author.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="isbn"
        placeholder="Book ISBN"
        value={form.isbn}
        onChange={handleChange}
        required
      />
      <input
        name="authorId"
        placeholder="Author ID"
        value={form.authorId}
        onChange={handleChange}
        required
      />
      <button type="submit">Assign Author</button>
    </form>
  );
};

export default AssignAuthor;
