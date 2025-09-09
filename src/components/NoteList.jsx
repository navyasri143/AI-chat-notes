import { useEffect, useState } from "react";
import API from "../api";
import NoteForm from "./NoteForm";
import Navbar from "./Navbar";
import "../assets/styles/Notes.css";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data } = await API.get("/notes");
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = async (noteData) => {
    try {
      const { data } = await API.post("/notes", noteData);
      setNotes([data, ...notes]); // Add new note at the beginning
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  if (loading) {
    return (
      <div className="notes-container">
        <Navbar />
        <div className="notes-content">
          <div className="loading-spinner">Loading your notes...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-container">
      <Navbar />
      <div className="notes-content">
        <div className="notes-header">
          <h1 className="notes-title">Your Notes</h1>
        </div>
        <NoteForm onAddNote={handleAddNote} />
        {notes.length === 0 ? (
          <div className="empty-state">
            <p>No notes yet. Create your first note above!</p>
          </div>
        ) : (
          <div className="notes-grid">
            {notes.map((note) => (
              <div key={note._id} className="note-card">
                <h3 className="note-title">{note.title}</h3>
                <p className="note-content">{note.content}</p>
                {note.summary && (
                  <div className="note-summary">
                    <strong>AI Summary:</strong> {note.summary}
                  </div>
                )}
                <div className="note-actions">
                  <button 
                    className="note-button delete-button"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
