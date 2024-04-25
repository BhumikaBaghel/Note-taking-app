import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
    <ToastContainer/>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
