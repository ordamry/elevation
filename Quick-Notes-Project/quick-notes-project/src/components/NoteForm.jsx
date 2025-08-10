import { useState } from "react"
import TextareaAutosize from "react-textarea-autosize";

function NoteForm ({onAddNote}) {
    const [text, setText] = useState ("")
    const [title, setTitle] = useState ("")
    const [category, setCategory] = useState("Personal")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return

        const newNote = {
            id: Date.now(),
            title: title.trim() || null,
            content: text,
            category: category,
            createdAt: new Date().toISOString()
        }
        onAddNote(newNote)
        setText("")
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}>
  <div>
    <label>
      Title (optional):
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
    </label>
  </div>

<div>
  <label>
    Category:
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="Personal">Personal</option>
      <option value="Work">Work</option>
      <option value="Other">Other</option>
    </select>
  </label>
</div>

  <div>
    <label>
      Content:
      <TextareaAutosize
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note..."
        minRows={3}
      />
    </label>
  </div>

  <button type="submit">Add Note</button>
</form>

    )
}

export default NoteForm