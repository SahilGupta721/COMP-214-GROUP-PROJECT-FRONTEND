import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

/**
 * Navigation bar for the application.
 */
const NavigationBar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/books">Books</Link>
    <Link to="/authors">Authors</Link>
    <Link to="/customers">Customers</Link>
  </nav>
);

export default NavigationBar;
