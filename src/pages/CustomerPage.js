import React from 'react';
import CustomerForm from '../components/CustomerForm';
import CustomerList from '../components/CustomerList';
/**
 * Page for managing customers.
 */
const CustomersPage = () => (
  <div>
    <h1>Customer Management</h1>
    <CustomerForm />
  </div>
);

export default CustomersPage;
