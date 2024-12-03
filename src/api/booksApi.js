import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Backend server base URL

/**
 * Registers a new book in the database.
 * @param {Object} book - Book data.
 * @returns {Object} The newly registered book.
 */
export const registerBook = async (book) => {
  try {
    const response = await axios.post(`${BASE_URL}/books`, book); // Ensure your backend endpoint matches
    return response.data;
  } catch (error) {
    console.error('Error registering book:', error);
    throw error;
  }
};

/**
 * Fetches all books from the database.
 * @returns {Array} List of books.
 */
export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

/**
 * Updates a book's details in the database.
 * @param {string} isbn - ISBN of the book to update.
 * @param {Object} updates - Updated fields.
 * @returns {Object} The updated book.
 */
export const updateBook = async (isbn, updates) => {
  try {
    const response = await axios.put(`${BASE_URL}/books/${isbn}`, updates);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

/**
 * Deletes a book by its ISBN.
 * @param {string} isbn - The ISBN of the book to delete.
 * @returns {Object} Confirmation of deletion.
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
