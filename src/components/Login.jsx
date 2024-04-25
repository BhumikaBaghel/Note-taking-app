import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/register.css";

//login credentials
//email: catas@gmail.com
//password:pbkdf2_sha256$720000$MsL5rKuuPWGt4JIPMHmvV2$aveystLyo/c+H04fanoZm6FOHRRjaPNdoMW/A8mjuC4=

const API_BASE_URL = "http://localhost:8000/notes/login/";

const LoginForm = () => {
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
  });

  const [formData, setFormData] = useState({
    email: "",
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
      setProfileData({
        username: res.data.username,
        email: res.data.email,
      });
        toast("welcome!", res.data.username);
        toast("registered succesfully!!");
     setTimeout(() => {
        window.location.href = "/";
      }, 1000);
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
            type="email"
            id="email"
            name="email"
            value={formData.email}
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
