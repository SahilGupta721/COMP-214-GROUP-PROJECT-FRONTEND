// import axios from 'axios';

// const BASE_URL = 'http://localhost:3004';

// /**
//  * Registers a new customer in the database.
//  * @param {Object} customer - Customer data.
//  */
// export const registerCustomer = async (customer) => {
//   const response = await axios.post(`${BASE_URL}/customers/register`, customer);
//   return response.data;
// };

// /**
//  * Updates a customer's details in the database.
//  * @param {number} id - Customer ID.
//  * @param {Object} updates - Updated customer details.
//  */
// export const updateCustomer = async (id, updates) => {
//   const response = await axios.put(`${BASE_URL}/customers/${id}`, updates);
//   return response.data;
// };

import axios from 'axios';

const BASE_URL = 'http://localhost:3003';

/**
 * Registers a new customer in the database.
 * - Customer data.
 */
export const registerCustomer = async (customer) => {
  try {
    const response = await axios.post(`${BASE_URL}/customers/register`, customer);
    if (response.status === 200) {
      return response.data; // Successful registration
    } else {
      throw new Error('Unexpected response status');
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      throw new Error(`Error: ${error.response.data.message || 'Unable to register customer.'}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
      throw new Error(`Error: ${error.message}`);
    }
  }
};

/**
 * Updates a customer's details in the database.
 *  - Customer ID.
 * - Updated customer details.
 */
export const updateCustomer = async (id, updates) => {
  try {
    const response = await axios.put(`${BASE_URL}/customers/${id}`, updates);
    if (response.status === 200) {
      return response.data; // Successful update
    } else {
      throw new Error('Unexpected response status');
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      throw new Error(`Error: ${error.response.data.message || 'Unable to update customer.'}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
      throw new Error('No response received from the server.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error message:', error.message);
      throw new Error(`Error: ${error.message}`);
    }
  }
};
