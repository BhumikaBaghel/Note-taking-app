import axios from "axios";
import React, { useState } from "react";
import "../styles/create.css";

const API_BASE_URL = "http://localhost:8000/notes/items/";

const CreateNote = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const addNote = async () => {
    try {
      const response = await axios.post(API_BASE_URL, formData);
      console.log("form data", formData);
      window.location.href = "/";
    } catch (error) {
      console.log("form data", formData);
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="create-note-form">
      <h2>Create a Note</h2>
      <div className="add-note">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleNoteChange}
            placeholder="enter new title"
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            name="content"
            value={formData.content}
            onChange={handleNoteChange}
            placeholder="Enter new content"
          />
        </div>
        <button onClick={addNote}>Add Note</button>
      </div>
    </div>
  );
};

export default CreateNote;
