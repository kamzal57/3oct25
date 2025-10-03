import { useState, useEffect } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import NoteViewer from "./components/NoteViewer";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter notes based on search term
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveNote = (note) => {
    const existingIndex = notes.findIndex((n) => n.id === note.id);
    
    if (existingIndex >= 0) {
      // Update existing note
      const updatedNotes = [...notes];
      updatedNotes[existingIndex] = note;
      setNotes(updatedNotes);
    } else {
      // Add new note at the beginning (most recent first)
      setNotes([note, ...notes]);
    }
    
    setSelectedNote(null);
    setIsEditing(false);
    setIsViewing(false);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
      setIsEditing(false);
      setIsViewing(false);
    }
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setIsViewing(true);
    setIsEditing(false);
  };

  const handleNewNote = () => {
    setSelectedNote(null);
    setIsEditing(true);
    setIsViewing(false);
  };

  const handleEditNote = () => {
    setIsEditing(true);
    setIsViewing(false);
  };

  const handleCancel = () => {
    if (selectedNote) {
      setIsViewing(true);
      setIsEditing(false);
    } else {
      setSelectedNote(null);
      setIsEditing(false);
      setIsViewing(false);
    }
  };

  const handleCloseViewer = () => {
    setSelectedNote(null);
    setIsViewing(false);
    setIsEditing(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
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
            {filteredNotes.length} {filteredNotes.length === 1 ? "note" : "notes"}
            {searchTerm && ` (filtered from ${notes.length})`}
          </div>
          <SearchBar onSearch={handleSearch} />
          <NoteList
            notes={filteredNotes}
            selectedNote={selectedNote}
            onSelectNote={handleSelectNote}
            onDeleteNote={handleDeleteNote}
          />
        </aside>
        
        <main className="main-content">
          {isViewing && selectedNote ? (
            <NoteViewer
              note={selectedNote}
              onEdit={handleEditNote}
              onClose={handleCloseViewer}
            />
          ) : isEditing ? (
            <NoteEditor
              note={selectedNote}
              onSave={handleSaveNote}
              onCancel={handleCancel}
            />
          ) : (
            <div className="welcome-screen">
              <h2>Welcome to Notes App</h2>
              <p>A multifunctional note-taking application built with Tauri, Vite, and React</p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">✍️</span>
                  <h3>Create & Edit</h3>
                  <p>Write and organize your notes</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔍</span>
                  <h3>Search</h3>
                  <p>Find notes quickly</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">📝</span>
                  <h3>Markdown Support</h3>
                  <p>Format with markdown</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">💾</span>
                  <h3>Auto-Save</h3>
                  <p>Never lose your work</p>
                </div>
              </div>
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
