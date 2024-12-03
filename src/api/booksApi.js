import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Backend server base URL

/**
 * Registers a new book in the database.
 * @param {Object} book - Book data.
 */
export const registerBook = async (book) => {
  const response = await axios.post(`${BASE_URL}/display`, book);
  return response.data;
};

/**
 * Fetches all books from the database.
 */
export const getBooks = async () => {
  const response = await axios.get(`${BASE_URL}/display`);
  return response.data;
};

/**
 * Updates a book's details in the database.
 * @param {Object} updates - Updated fields.
 * @param {string} isbn - ISBN of the book to update.
 */
export const updateBook = async (isbn, updates) => {
  const response = await axios.put(`${BASE_URL}/display/${isbn}`, updates);
  return response.data;
};

/**
 * Deletes a book by its ISBN.
 * @param {string} isbn - The ISBN of the book to delete.
 */
export const deleteBook = async (isbn) => {
  try {
    const response = await axios.delete(`${BASE_URL}/books/${isbn}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};
