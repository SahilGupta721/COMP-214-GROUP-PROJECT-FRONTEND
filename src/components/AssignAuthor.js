import React, { useState } from 'react';

/**
 * Component to assign an author to a book.
 */
const AssignAuthor = () => {
  const [assignment, setAssignment] = useState({
    isbn: '',
    authorId: '',
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Assigned Author ID ${assignment.authorId} to Book ISBN ${assignment.isbn}`);
    // Add API call to handle this action
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="isbn" placeholder="Book ISBN" value={assignment.isbn} onChange={handleChange} required />
      <input name="authorId" placeholder="Author ID" value={assignment.authorId} onChange={handleChange} required />
      <button type="submit">Assign Author</button>
    </form>
  );
};

export default AssignAuthor;
