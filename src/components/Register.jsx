import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/register.css";

//login credentials
//email: catas@gmail.com
//password:pbkdf2_sha256$720000$MsL5rKuuPWGt4JIPMHmvV2$aveystLyo/c+H04fanoZm6FOHRRjaPNdoMW/A8mjuC4=

const API_BASE_URL = "http://localhost:8000/notes/register/";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
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
    if (response.status === 201) {
      toast("registered succesfully!!");
       toast("welcome!", res.data.username);
     setTimeout(() => {
        window.location.href = "http://localhost:3000/login/";
      }, 1000);      
      console.log(formData);
    } else {
      window.location.href = "register/";
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
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
        <button type="submit">Register</button>
      </form>
      <a href="http://localhost:3000/login/">
        <button type="submit">Login</button>
      </a>
    </div>
  );
};

export default RegistrationForm;
