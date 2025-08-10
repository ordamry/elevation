import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteGrid from "./components/NoteGrid";
import NoteModel from "./components/NoteModel";
import Modal from "react-modal";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNoteModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeNoteModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>QuickNotes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteGrid
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onNoteClick={openNoteModal}
      />
      {selectedNote && (
  <NoteModel
    note={selectedNote}
    isOpen={true}
    onClose={closeNoteModal}
  />
)}

    </div>
  );
}

export default App;
