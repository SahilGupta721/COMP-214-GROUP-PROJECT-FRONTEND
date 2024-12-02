import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AuthorsPage from './pages/AuthorsPage';
import CustomersPage from './pages/CustomersPage';

/**
 * Routing setup for the application.
 */
const AppRoutes = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<BooksPage />} />
      <Route path="/authors" element={<AuthorsPage />} />
      <Route path="/customers" element={<CustomersPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
