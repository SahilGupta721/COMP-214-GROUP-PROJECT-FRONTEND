import React from 'react';

/**
 * HomePage Component
 * Displays a welcome message and basic navigation instructions for the app.
 */
const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the JL Book Order System</h1>
      <p>This system helps you manage books, authors, and customers efficiently.</p>
      <p>
        Use the navigation bar at the top to:
        <ul style={{ listStyleType: 'none', padding: '10px' }}>
          <li>📚 Manage Books</li>
          <li>🖊️ Manage Authors</li>
          <li>👥 Manage Customers</li>
        </ul>
      </p>
    </div>
  );
};

export default HomePage;
