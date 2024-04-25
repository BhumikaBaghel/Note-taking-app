import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import addIcon from "../assets/images/plus.png";
import viewIcon from "../assets/images/view.png";
import userIcon from "../assets/images/user.png";
import { ToastContainer, toast } from "react-toastify";
import "../styles/ListView.css";

const API_BASE_URL = "http://localhost:8000/notes/items/";

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className="notes-container">
      <div className="notes-header">
        <h1>📝Notes✒️</h1>
        <span>
          <a href="register/">
            <img src={userIcon} alt="User Icon" />
          </a>
        </span>
      </div>
      <div className="add-note-container" style={{ marginBottom: "20px" }}>
        <button>
          <a href="create/">
            <img src={addIcon} alt="Add Icon" />
          </a>
        </button>
      </div>
      <ul>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

const NoteItem = ({ note }) => (
  <div className="note-item">
    <span>
      <strong>{note.title}</strong>
    </span>
    <Link to={`/single-item/${note.id}`}>
      <button>
        <img src={viewIcon} alt="View Icon" />
      </button>
    </Link>
  </div>
);

export default NotesApp;
