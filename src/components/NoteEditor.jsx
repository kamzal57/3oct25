import { useState, useEffect } from "react";
import "./NoteEditor.css";

function NoteEditor({ note, onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || content.trim()) {
      onSave({
        id: note?.id || Date.now(),
        title: title.trim() || "Untitled",
        content: content.trim(),
        updatedAt: new Date().toISOString(),
      });
    }
  };

  return (
    <div className="note-editor">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="note-title-input"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          className="note-content-input"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
        />
        <div className="editor-actions">
          <button type="submit" className="btn btn-primary">
            Save Note
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteEditor;
