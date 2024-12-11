import React, { useState, useEffect } from "react";
import "../styles/App.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editCustomer, setEditCustomer] = useState({});

  // Fetch customer data when the component mounts
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:3003/customers/list");
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        const data = await response.json();
        setCustomers(data);
      } catch (err) {
        setError("Error fetching customer data");
        console.error(err);
      }
    };

    fetchCustomers();
  }, []);

  // Handle delete
  const handleDelete = async (index) => {
    const customerToDelete = customers[index];
    console.log("Deleting customer:", customerToDelete);

    try {
      const response = await fetch(`http://localhost:3003/customers/delete/${customerToDelete.customerNumber}`, {
        method: 'DELETE',
      });

      console.log("Response from delete:", response);

      if (!response.ok) {
        console.error('Failed to delete customer. Status:', response.status);
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to delete customer");
      }

      // Remove customer locally after successful deletion
      const updatedCustomers = customers.filter((_, i) => i !== index);
      setCustomers(updatedCustomers);

      console.log("Updated customers after delete:", updatedCustomers);
    } catch (err) {
      setError("Error deleting customer");
      console.error(err);
    }
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditCustomer({ ...customers[index] });
  };

  const handleSave = async () => {
    const updatedCustomers = [...customers];
    updatedCustomers[editIndex] = { ...updatedCustomers[editIndex], ...editCustomer };

    try {
      const response = await fetch(`http://localhost:3003/customers/update/${editCustomer.customerNumber}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editCustomer),
      });

      if (!response.ok) {
        throw new Error('Failed to update customer');
      }

      // If successful, update the state
      setCustomers(updatedCustomers);
      setEditIndex(null);
    } catch (err) {
      setError("Error updating customer data");
      console.error(err);
    }
  };

  // Handle input changes for edit form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Customer Number</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Referred</th> {/* Added Referred column */}
            <th>Region</th> {/* Added Region column */}
            <th>Email</th> {/* Added Email column */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="11" style={{ textAlign: "center" }}> {/* Updated colspan to 11 */}
                No customers found
              </td>
            </tr>
          ) : (
            customers.map((customer, index) =>
              editIndex === index ? (
                <tr key={index}>
                  <td>{customer.customerNumber}</td>
                  <td>{customer.lastname}</td>
                  <td>{customer.firstname}</td>
                  <td>
                    <input
                      type="text"
                      name="address"
                      value={editCustomer.address || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                      {customer.city || ""}
                  </td>
                  <td>
                    <input
                      type="text"
                      name="state"
                      value={editCustomer.state || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    
                      {customer.zip || ""}
                    
                    
                  </td>
                  <td>
                    
                      {customer.referred || ""}
                    
                    
                  </td>
                  <td>
                    <input
                      type="text"
                      name="region"
                      value={editCustomer.region || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editCustomer.email || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{customer.customerNumber}</td>
                  <td>{customer.lastname}</td>
                  <td>{customer.firstname}</td>
                  <td>{customer.address}</td>
                  <td>{customer.city}</td>
                  <td>{customer.state}</td>
                  <td>{customer.zip}</td>
                  <td>{customer.referred}</td> {/* Display Referred column */}
                  <td>{customer.region}</td> {/* Display Region column */}
                  <td>{customer.email}</td> {/* Display Email column */}
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </tr>
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
