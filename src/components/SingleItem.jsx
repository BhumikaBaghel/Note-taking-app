import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import deleteIcon from "../assets/images/delete.png";
import editIcon from "../assets/images/edit.png";
import axios from "axios";
import "../styles/SingleItem.css";

const API_BASE_URL = "http://localhost:8000/notes/items/";

const NotesApp = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const [editNoteId, setEditNoteId] = useState(null);
  const [editNoteContent, setEditNoteContent] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${id}/`);
      setNote(response.data);
      setEditNoteContent(response.data);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const handleEditNoteChange = (e) => {
    const { name, value } = e.target;
    setEditNoteContent((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditSaveNote = async () => {
    try {
      await axios.put(`${API_BASE_URL}${note.id}/`, editNoteContent);
      window.location.href = "/";
      setEditNoteId(null);
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  const handleEditNote = (id, content) => {
    setEditNoteId(id);
    setEditNoteContent({
      title: note.title,
      content: note.content,
    });
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}${id}/`);
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div className="notes-container">
      <h1>Note: {note.title}</h1>
      {editNoteId === note.id ? (
        <>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              name="title"
              type="text"
              value={editNoteContent.title}
              onChange={handleEditNoteChange}
              className="edit-note-input"
            />
          </div>
          <div>
            <label htmlFor="content">Content:</label>
            <input
              name="content"
              type="text"
              value={editNoteContent.content}
              onChange={handleEditNoteChange}
              className="edit-note-input"
            />
          </div>
          <button onClick={handleEditSaveNote} className="save-button">
            Save
          </button>
        </>
      ) : (
        <NoteContent
          note={note}
          handleEditNote={handleEditNote}
          deleteNote={deleteNote}
        />
      )}
    </div>
  );
};

const NoteContent = ({ note, handleEditNote, deleteNote }) => {
  const createdAtDate = new Date(note.created_At).toDateString();

  return (
    <>
      <div className="note-div">
        <h3 className="note-title">{note.title}</h3>
        <p className="note-content">{note.content}</p>
        <p className="note-created-at">
          <strong>Created at: </strong>
          {createdAtDate}
        </p>
      </div>
      <button
        onClick={() => handleEditNote(note.id, note.content)}
        className="edit-button"
      >
        <img src={editIcon} alt="Edit Icon" />
      </button>
      <button onClick={() => deleteNote(note.id)} className="delete-button">
        <img src={deleteIcon} alt="Delete Icon" />
      </button>
    </>
  );
};

export default NotesApp;
