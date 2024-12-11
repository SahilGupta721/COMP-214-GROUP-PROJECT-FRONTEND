
import React, { useEffect, useState } from "react";

const BookList = () => {
  const [books, setBooks] = useState([]); // State to store the list of books
  const [editingBook, setEditingBook] = useState(null); // Current book being edited
  const [updatedValues, setUpdatedValues] = useState({
    cost: "",
    retail: "",
    discount: "",
    category: "",
  }); // Updated field values for editing
  const [error, setError] = useState(""); // State to store error messages

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3003/books/list");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      }
    };

    fetchBooks();
  }, []);

  // Handle the Edit button click
  const handleEditClick = (book) => {
    setEditingBook(book.isbn); // Set the current book to edit mode
    setUpdatedValues({
      cost: book.cost,
      retail: book.retail,
      discount: book.discount,
      category: book.category,
    });
  };

  // Handle the Save button click
  const handleSaveClick = async (isbn) => {
    try {
      const response = await fetch(`http://localhost:3003/books/update/${isbn}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedValues),
      });

      if (!response.ok) {
        throw new Error("Failed to update book.");
      }

      // Update the books list in state
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.isbn === isbn ? { ...book, ...updatedValues } : book
        )
      );
      setEditingBook(null); // Exit editing mode
      setUpdatedValues({
        cost: "",
        retail: "",
        discount: "",
        category: "",
      }); // Reset the updated values
      setError(""); // Clear any previous errors
    } catch (err) {
      console.error("Error saving book:", err);
      setError("Failed to save changes. Please try again.");
    }
  };

  // Handle the Delete button click
  const handleDeleteClick = async (isbn) => {
    try {
      const response = await fetch(`http://localhost:3003/books/delete/${isbn}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete book.");
      }

      setBooks((prevBooks) => prevBooks.filter((book) => book.isbn !== isbn));
    } catch (err) {
      console.error("Error deleting book:", err);
      setError("Failed to delete book. Please try again.");
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      {/* Display error messages if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Books table */}
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Publication Date</th>
            <th>Publisher ID</th>
            <th>Cost</th>
            <th>Retail</th>
            <th>Discount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) =>
              editingBook === book.isbn ? (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.pubDate}</td>
                  <td>{book.pubId}</td>
                  <td>
                    <input
                      type="text"
                      value={updatedValues.cost}
                      onChange={(e) =>
                        setUpdatedValues({
                          ...updatedValues,
                          cost: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updatedValues.retail}
                      onChange={(e) =>
                        setUpdatedValues({
                          ...updatedValues,
                          retail: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updatedValues.discount}
                      onChange={(e) =>
                        setUpdatedValues({
                          ...updatedValues,
                          discount: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={updatedValues.category}
                      onChange={(e) =>
                        setUpdatedValues({
                          ...updatedValues,
                          category: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSaveClick(book.isbn)}>Save</button>
                    <button
                      onClick={() => {
                        setEditingBook(null);
                        setUpdatedValues({
                          cost: "",
                          retail: "",
                          discount: "",
                          category: "",
                        }); // Reset updated values
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.pubDate}</td>
                  <td>{book.pubId}</td>
                  <td>{book.cost}</td>
                  <td>{book.retail}</td>
                  <td>{book.discount}</td>
                  <td>{book.category}</td>
                  <td>
                    <button onClick={() => handleEditClick(book)}>Edit</button>
                    {/* <button onClick={() => handleDeleteClick(book.isbn)}>Delete</button> */}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="9">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
