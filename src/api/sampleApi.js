import axios from 'axios';

const BASE_URL = 'http://localhost:3003';

/**
 * Fetches employees from the backend.
 */
export const fetchEmployees = async () => {
  const response = await axios.get(`${BASE_URL}/employees`); // Make GET request to the backend
  return response.data; // Return the fetched data
};
