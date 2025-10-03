import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (e) {
        console.error("Failed to parse saved notes:", e);
      }
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (note) => {
    const existingIndex = notes.findIndex((n) => n.id === note.id);
    
    if (existingIndex >= 0) {
      // Update existing note
      const updatedNotes = [...notes];
      updatedNotes[existingIndex] = note;
      setNotes(updatedNotes);
    } else {
      // Add new note
      setNotes([note, ...notes]);
    }
    
    setSelectedNote(null);
    setIsEditing(false);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setIsEditing(true);
  };

  const handleNewNote = () => {
    setSelectedNote(null);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setSelectedNote(null);
    setIsEditing(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Notes App</h1>
        <button className="btn btn-primary" onClick={handleNewNote}>
          + New Note
        </button>
      </header>
      
      <div className="app-content">
        <aside className="sidebar">
          <div className="notes-count">
            {notes.length} {notes.length === 1 ? "note" : "notes"}
          </div>
          <NoteList
            notes={notes}
            selectedNote={selectedNote}
            onSelectNote={handleSelectNote}
            onDeleteNote={handleDeleteNote}
          />
        </aside>
        
        <main className="main-content">
          {isEditing ? (
            <NoteEditor
              note={selectedNote}
              onSave={handleSaveNote}
              onCancel={handleCancel}
            />
          ) : (
            <div className="welcome-screen">
              <h2>Welcome to Notes App</h2>
              <p>A multifunctional note-taking application built with Tauri, Vite, and React</p>
              <button className="btn btn-primary btn-large" onClick={handleNewNote}>
                Create Your First Note
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
