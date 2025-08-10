import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteGrid from "./components/NoteGrid";
import NoteModel from "./components/NoteModel";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const openNoteModal = (note) => {
    setSelectedNote(note);
  };

  const closeNoteModal = () => {
    setSelectedNote(null);
  };

  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleUpdateNote = (updated) => {
    setNotes((prev) => prev.map((n) => (n.id === updated.id ? updated : n)));
  };

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || note.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <h1>QuickNotes</h1>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <NoteForm onAddNote={handleAddNote} />

      <NoteGrid
        notes={filteredNotes}
        onDeleteNote={handleDeleteNote}
        onNoteClick={openNoteModal}
      />

      {selectedNote && (
        <NoteModel
          note={selectedNote}
          isOpen={true}
          onClose={closeNoteModal}
          onSave={handleUpdateNote}
        />
      )}
    </div>
  );
}

export default App;
