import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavigationBar.css';

/**
 * Navigation bar for the application.
 */
const NavigationBar = () => (
  <nav className="navbar">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}
    >
      Home
    </NavLink>
    <NavLink
      to="/books"
      className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}
    >
      Books
    </NavLink>
    <NavLink
      to="/BookList"
      className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}
    >
      BookList
    </NavLink>
    <NavLink
      to="/customers"
      className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}
    >
      Customers
    </NavLink>
    
    <NavLink
      to="/CustomerList"
      className={({ isActive }) => (isActive ? 'active-link' : 'navbar-link')}
    >
      CustomerList
    </NavLink>
  </nav>
);

export default NavigationBar;
