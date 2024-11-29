
import React, { useState } from 'react'; 
import axios from 'axios';
function Setup() {
    const [tableName, setTableName] = useState('');
    const [message, setMessage] = useState('');
  
    const handleCreateTable = async () => {
      try {
        const response = await axios.post('http://localhost:3001/create-table', {
          tableName,
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error('Error creating table:', error);
        setMessage('Failed to create table');
      }
    };
}
function Form()
{
    return(
    <div>
        <h1>This is divions tag from HTML5 
            </h1>
        </div>
        
    );
}
export default Form;