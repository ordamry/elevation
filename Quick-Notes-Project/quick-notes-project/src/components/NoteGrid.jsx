import { formatDate } from "../utils/dateFormat";

function NoteGrid({ notes = [], onDeleteNote, onNoteClick }) {
  const handleClick = (id) => {
    if (window.confirm("Are you sure you want to delete your note ?")) {
      onDeleteNote(id);
    }
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <div onClick={() => onNoteClick(note)}>
            {note.title && <h3>{note.title}</h3>}
            <p>{note.content}</p>
            <small>Created: {formatDate(note.createdAt)}</small>
            {note.updatedAt && (
              <>
                <br />
                <small>Updated: {formatDate(note.updatedAt)}</small>
              </>
            )}
          </div>
          <button onClick={() => handleClick(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteGrid;
