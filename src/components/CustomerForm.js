import React, { useState } from 'react';
import { registerCustomer } from '../api/customersApi';

/**
 * Component for registering a new customer.
 */
const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerCustomer(customer); // API call to register customer
      alert('Customer registered successfully!');
    } catch (error) {
      console.error('Error registering customer:', error);
      alert('Error registering customer!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={customer.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={customer.lastName} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={customer.email} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={customer.address} onChange={handleChange} required />
      <button type="submit">Register Customer</button>
    </form>
  );
};

export default CustomerForm;
