import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

/**
 * Registers a new customer in the database.
 * @param {Object} customer - Customer data.
 */
export const registerCustomer = async (customer) => {
  const response = await axios.post(`${BASE_URL}/customers`, customer);
  return response.data;
};

/**
 * Updates a customer's details in the database.
 * @param {number} id - Customer ID.
 * @param {Object} updates - Updated customer details.
 */
export const updateCustomer = async (id, updates) => {
  const response = await axios.put(`${BASE_URL}/customers/${id}`, updates);
  return response.data;
};
