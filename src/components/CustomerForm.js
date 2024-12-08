import React, { useState } from 'react';
import { registerCustomer } from '../api/customersApi';

/**
 * Component for registering a new customer.
 */
const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    customerNumber: '', // Corresponds to CUSTOMER#
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    referred: '', // Can be empty or filled with a reference, such as '1080'
    region: '',   // Typically two-character region code, like 'NE'
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
      <input
        name="customerNumber"
        placeholder="Customer Number"
        value={customer.customerNumber}
        onChange={(e) => handleChange({ target: { name: 'customerNumber', value: Math.max(0, e.target.value) } })}
        required
        type='number'
      />
      <input
        name="firstName"
        placeholder="First Name"
        value={customer.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={customer.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
        required
      />
      <input
        name="address"
        placeholder="Address"
        value={customer.address}
        onChange={handleChange}
        required
      />
      <input
        name="city"
        placeholder="City"
        value={customer.city}
        onChange={handleChange}
        required
      />
      <input
        name="state"
        placeholder="State"
        value={customer.state}
        onChange={handleChange}
        required
      />
      <input
        name="zip"
        placeholder="Zip"
        value={customer.zip}
        onChange={handleChange}
        required
      />
      <input
        name="referred"
        placeholder="Referred By (optional)"
        value={customer.referred}
        onChange={handleChange}
        type='number'

      />
      <input
        name="region"
        placeholder="Region (e.g., NE)"
        value={customer.region}
        onChange={handleChange}
        required
      />
      <button type="submit">Register Customer</button>
    </form>
  );
};

export default CustomerForm;