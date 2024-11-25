import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [showModal, setShowModal] = useState(false);

  function handleDelete() {
    props.onDelete(props.id);
    setShowModal(false); // Close modal after deletion
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => setShowModal(true)}>
        <DeleteIcon className="flashing-icon" />
      </button>

      {showModal && (
        <div className="modal">
          <p>Are you sure you want to delete this note?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Note;
