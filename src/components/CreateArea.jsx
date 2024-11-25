import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent page reload

    // Validation: Check if title or content is empty
    if (!note.title.trim() || !note.content.trim()) {
      setShowModal(true); // Show modal if validation fails
      return;
    }

    // Proceed with adding the note
    props.onAdd(note);

    // Reset fields
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon className="flashing-icon" />
          </Fab>
        </Zoom>
      </form>

      {/* Modal for validation */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Both title and content are required!</p>
            <button className="confirm" onClick={() => setShowModal(false)}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateArea;
