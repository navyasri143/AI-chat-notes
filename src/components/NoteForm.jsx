import { useState } from "react";
import "../assets/styles/Notes.css";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");  // Added title field
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please enter both title and content");
      return;
    }
    onAddNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          className="note-input"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Enter note content"
          value={content}
          className="note-input note-textarea"
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
