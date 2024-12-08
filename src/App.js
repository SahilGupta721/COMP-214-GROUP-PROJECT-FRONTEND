import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AuthorPage from './pages/AuthorPage';
import CustomerPage from './pages/CustomerPage';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/authors" element={<AuthorPage />} />
        <Route path="/customers" element={<CustomerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
