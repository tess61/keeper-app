import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    const userConfirmed = window.confirm("Are you sure you want to delete this note?");
    if (userConfirmed) {
      props.onDelete(props.id); // Proceed with deletion if confirmed
    }
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button  onClick={handleClick}>
        <DeleteIcon className="flashing-icon"/>
      </button>
    </div>
  );
}

export default Note;
