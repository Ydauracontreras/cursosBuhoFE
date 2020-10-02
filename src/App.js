import React, { Component } from "react";
import "./assets/styles/App.css";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    //<Routes></Routes>
    <div className="App">
      <div>
        <ToastContainer />
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
