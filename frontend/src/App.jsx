import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);

  const axiosConfig = {
    headers: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  };

  async function fetchNotes() {
    try {
      const response = await axios.get(
        `${API_URL}/notes`,
        axiosConfig
      );

      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  async function createNote() {
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/notes`,
        {
          title,
          content,
        },
        axiosConfig
      );

      setTitle("");
      setContent("");

      fetchNotes();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  }

  async function updateNote() {
    try {
      await axios.put(
        `${API_URL}/notes/${editingId}`,
        {
          title,
          content,
        },
        axiosConfig
      );

      setEditingId(null);
      setTitle("");
      setContent("");

      fetchNotes();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }

  async function deleteNote(id) {
    try {
      await axios.delete(
        `${API_URL}/notes/${id}`,
        axiosConfig
      );

      fetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  function editNote(note) {
    setEditingId(note.id);
    setTitle(note.title);
    setContent(note.content);
  }

  return (
    <div className="container">
      <h1>DevOps Notes App</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {editingId ? (
          <button onClick={updateNote}>Update Note</button>
        ) : (
          <button onClick={createNote}>Create Note</button>
        )}
      </div>

      <div className="notes-container">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>

            <div className="buttons">
              <button onClick={() => editNote(note)}>
                Edit
              </button>

              <button onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;