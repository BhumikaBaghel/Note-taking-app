import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/register.css";

const API_BASE_URL = "http://localhost:8000/notes/login/";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(API_BASE_URL, formData);
    console.log("login reponse: ", response);
    if (response.status === 201) {
      const res = await axios.get(
        `http://localhost:8000/notes/userdetail/${response.data}/`
      );
      console.log("res: ", res.data);
      toast("welcome!", res.username);
      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    } else {
      window.location.href = "login/";
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

