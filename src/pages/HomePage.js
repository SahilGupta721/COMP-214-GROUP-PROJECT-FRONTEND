import React from 'react';
import '../styles/HomePage.css';

/**
 * HomePage Component
 * Displays a welcome message and basic navigation instructions for the app.
 */
const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the JL Book Order System</h1>
      <p className="home-description">
        This system helps you manage books, authors, and customers efficiently.
      </p>
      <p className="home-instructions">Use the navigation bar at the top to:</p>
      <ul className="home-list">
        <li>📚 Manage Books</li>
        <li>🖊️ Manage Authors</li>
        <li>👥 Manage Customers</li>
      </ul>
    </div>
  );
};

export default HomePage;
