import React, { useState } from 'react';
import { fetchEmployees } from '../api/sampleApi';

/**
 * Component with a button to test backend connection.
 */
const SampleButton = () => {
  const [employees, setEmployees] = useState([]);

  /**
   * Fetches employee data when the button is clicked.
   */
  const handleClick = async () => {
    try {
      const data = await fetchEmployees(); // Call API to fetch employees
      setEmployees(data); // Set the employee data
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Fetch Employees
      </button>

      {employees.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h3>Employee Details:</h3>
          <ul>
            {employees.map((employee, index) => (
              <li key={index}>
                <strong>ID:</strong> {employee[0]}, <strong>Name:</strong> {employee[1]} {employee[2]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SampleButton;
