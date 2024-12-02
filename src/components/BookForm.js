import React, { useState } from 'react';
import { registerBook } from '../api/booksApi';
import './BookForm.css';

/**
 * Component for registering a new book.
 */
const BookForm = () => {
  const [book, setBook] = useState({
    isbn: '',
    title: '',
    pubdate: '',
    pubid: '',
    cost: '',
    retail: '',
    discount: '',
    category: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerBook(book); // API call to register book
      alert('Book registered successfully!');
      setBook({ isbn: '', title: '', pubdate: '', pubid: '', cost: '', retail: '', discount: '', category: '' }); // Reset form
    } catch (error) {
      console.error('Error registering book:', error);
      alert('Error registering book!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} required />
      <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input name="pubdate" placeholder="Publication Date" value={book.pubdate} onChange={handleChange} required />
      <input name="pubid" placeholder="Publisher ID" value={book.pubid} onChange={handleChange} required />
      <input name="cost" placeholder="Cost" value={book.cost} onChange={handleChange} required />
      <input name="retail" placeholder="Retail Price" value={book.retail} onChange={handleChange} required />
      <input name="discount" placeholder="Discount" value={book.discount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={book.category} onChange={handleChange} required />
      <button type="submit">Register Book</button>
    </form>
  );
};

export default BookForm;
