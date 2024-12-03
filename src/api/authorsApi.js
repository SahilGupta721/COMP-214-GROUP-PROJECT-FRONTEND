import axios from 'axios';
import '../styles/AuthorForm.css'
const BASE_URL = 'http://localhost:3001';

/**
 * Registers a new author in the database.
 * @param {Object} author - Author data.
 */
export const registerAuthor = async (author) => {
  const response = await axios.post(`${BASE_URL}/authors`, author);
  return response.data;
};
