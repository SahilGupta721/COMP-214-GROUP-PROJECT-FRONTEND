import React from 'react';
import AuthorForm from '../components/AuthorForm';

/**
 * Page for managing authors.
 */
const AuthorsPage = () => (
  <div>
    <h1>Author Management</h1>
    <AuthorForm /> {/* Form for registering authors */}
    {/* You can add a list component here for displaying authors in the future */}
  </div>
);

export default AuthorsPage;
