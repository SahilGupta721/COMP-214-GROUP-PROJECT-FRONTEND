import React, { useState } from 'react';
import { registerBook } from '../api/booksApi';
import '../styles/BookForm.css'

const BookForm = () => {
  const [form, setForm] = useState({
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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerBook(form);
      alert('Book registered successfully!');
      setForm({
        isbn: '',
        title: '',
        pubdate: '',
        pubid: '',
        cost: '',
        retail: '',
        discount: '',
        category: '',
      });
    } catch (error) {
      console.error('Error registering book:', error);
      alert('Failed to register book.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register Book</h1>
      <input name="isbn" placeholder="ISBN" value={form.isbn} onChange={handleChange} required />
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="pubdate" placeholder="Publication Date" value={form.pubdate} onChange={handleChange} required />
      <input name="pubid" placeholder="Publisher ID" value={form.pubid} onChange={handleChange} required />
      <input name="cost" placeholder="Cost" value={form.cost} onChange={handleChange} required />
      <input name="retail" placeholder="Retail Price" value={form.retail} onChange={handleChange} required />
      <input name="discount" placeholder="Discount" value={form.discount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default BookForm;
