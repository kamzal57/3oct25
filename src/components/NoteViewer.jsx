import { marked } from "marked";
import "./NoteViewer.css";

function NoteViewer({ note, onEdit, onClose }) {
  // Configure marked options
  marked.setOptions({
    breaks: true,
    gfm: true,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  const getMarkdownHtml = () => {
    return { __html: marked(note.content || "") };
  };

  return (
    <div className="note-viewer">
      <div className="viewer-header">
        <h1 className="viewer-title">{note.title}</h1>
        <div className="viewer-actions">
          <button className="btn btn-primary" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="viewer-meta">
        <span>Last updated: {formatDate(note.updatedAt)}</span>
      </div>
      <div className="viewer-content markdown-body" dangerouslySetInnerHTML={getMarkdownHtml()} />
    </div>
  );
}

export default NoteViewer;
