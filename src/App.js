import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import CustomerPage from './pages/CustomerPage';
import BookList from './components/BookList';
import CustomerList from './components/CustomerList';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/BookList" element={<BookList />} />
        <Route path="/CustomerList" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
