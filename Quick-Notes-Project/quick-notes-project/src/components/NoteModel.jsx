import Modal from "react-modal";
import { formatDate } from "../utils/dateFormat";

function NoteModel({ note, isOpen, onClose }) {
    if (!note) return null


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Note Details"
    >
      <h2>{note.title || "Untitled Note"}</h2>
      <p>{note.content}</p>
      <small>Created at: {formatDate(note.createdAt)}</small>
      <br />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default NoteModel;
