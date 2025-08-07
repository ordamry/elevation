import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteGrid from "./components/NoteGrid";

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
    console.log("Note added:", newNote);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id))
  }

  return (
    <div>
      <h1>QuickNotes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteGrid notes={notes} onDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
