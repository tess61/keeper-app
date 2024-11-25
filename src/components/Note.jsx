import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  function handleDelete() {
    setShowModal(true); // Show the modal when delete is clicked
  }

  function confirmDelete() {
    props.onDelete(props.id); // Call the delete function
    setShowModal(false); // Hide the modal after confirmation
  }

  function cancelDelete() {
    setShowModal(false); // Hide the modal without deleting
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon className="flashing-icon" />
      </button>

      {/* Modal for delete confirmation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal ">
            <p>Are you sure you want to delete this note?</p>
            <button  onClick={confirmDelete}>Yes</button>
            <button onClick={cancelDelete}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
