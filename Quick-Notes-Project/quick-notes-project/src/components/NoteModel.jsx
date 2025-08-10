import { useEffect, useState } from "react";
import Modal from "react-modal";
import { formatDate } from "../utils/dateFormat";

function NoteModel({ note, isOpen, onClose, onSave }) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "");
  }, [note]);

  const handleSave = () => {
    const updated = {
      ...note,
      title: title.trim() || null,
      content: content,
      updatedAt: new Date().toISOString(),
    };
    onSave(updated);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Note Details">
      <h2>{note.title || "Untitled Note"}</h2>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Title (optional)"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <textarea
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your note..."
        />
      </div>
      <small>Created at: {formatDate(note.createdAt)}</small>
      {note.updatedAt && (
        <>
          <br />
          <small>Updated at: {formatDate(note.updatedAt)}</small>
        </>
      )}
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default NoteModel;
