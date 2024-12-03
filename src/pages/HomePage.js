import React from 'react';
import SampleButton from '../components/SampleButton'; // Import the SampleButton component

/**
 * HomePage Component
 * Displays a welcome message and basic navigation instructions for the app.
 * Includes a button to test backend connection.
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

      {/* Add the SampleButton component below */}
      <div style={{ marginTop: '20px' }}>
        <h2>Test Backend Connection</h2>
        <p>Click the button below to fetch employee data from the backend:</p>
        <SampleButton /> {/* Button for testing backend connection */}
      </div>
    </div>
  );
};

export default HomePage;
