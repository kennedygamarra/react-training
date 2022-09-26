import React from "react";

const ContactTable = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const actionDelete = {
      type: "delete",
      payload: id,
    };
    dispatch(actionDelete);
  };
  return (
    // create a tabl   e with the contacs
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          const finalId = contact.id.split("-")[0];
          return (
            <tr key={finalId}>
              <td>{finalId}</td>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactTable;
