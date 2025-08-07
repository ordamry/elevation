import { formatDate } from "../utils/dateFormat";

function NoteGrid ({notes = [], onDeleteNote }) {

    const handleClick = (id) => {
        if (window.confirm("Are you sure you want to delete your note ?")){
            onDeleteNote(id)
        }
    }

    return (
      <div>
        {notes.map((note) => (
            <div key={note.id}>
                {note.title && <h3>{note.title}</h3>}
                <p>{note.content}</p>
                <small>{formatDate(note.createdAt)}</small>
                <button onClick= {() => handleClick(note.id)}>Delete</button>
                </div>
        ))}
      </div>
    )
}

export default NoteGrid