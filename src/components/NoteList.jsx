import "./NoteList.css";

function NoteList({ notes, selectedNote, onSelectNote, onDeleteNote }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <div className="empty-state">
          <p>No notes yet.</p>
          <p>Create your first note!</p>
        </div>
      ) : (
        notes.map((note) => (
          <div
            key={note.id}
            className={`note-item ${selectedNote?.id === note.id ? "active" : ""}`}
            onClick={() => onSelectNote(note)}
          >
            <div className="note-item-header">
              <h3 className="note-item-title">{note.title}</h3>
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm("Are you sure you want to delete this note?")) {
                    onDeleteNote(note.id);
                  }
                }}
                title="Delete note"
              >
                ×
              </button>
            </div>
            <p className="note-item-preview">
              {note.content.substring(0, 100)}
              {note.content.length > 100 ? "..." : ""}
            </p>
            <span className="note-item-date">{formatDate(note.updatedAt)}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;
