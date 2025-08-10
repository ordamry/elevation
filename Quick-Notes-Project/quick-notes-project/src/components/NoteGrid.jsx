import { formatDate } from "../utils/dateFormat";

function NoteGrid({ notes = [], onDeleteNote, onNoteClick }) {
  const categoryColors = {
    Personal: "#f8d7da", // ורוד עדין
    Work: "#d1ecf1",     // כחול עדין
    Other: "#d4edda"     // ירוק עדין
  };

  return (
    <div>
      {notes.map((note) => (
        <div
          key={note.id}
          onClick={() => onNoteClick(note)}
          style={{
            backgroundColor: categoryColors[note.category] || "#fff",
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {note.title && <h3>{note.title}</h3>}
          <p>{note.content}</p>
          {note.category && <small>Category: {note.category}</small>}<br />
          <small>Created: {formatDate(note.createdAt)}</small>
          {note.updatedAt && (
            <>
              <br />
              <small>Updated: {formatDate(note.updatedAt)}</small>
            </>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (window.confirm("Are you sure you want to delete your note ?")) {
                onDeleteNote(note.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteGrid;
