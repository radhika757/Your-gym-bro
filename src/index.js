import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workout from "./Routes/Workout";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Home" element={<App />} />
        <Route path="Workout" element={<Workout />} />
        <Route path="Workout/Monday" index element={<main>There is nothing here!</main>}></Route>
        <Route
          path="*"
          element={
            <main>
              <h1> This page is not available yet </h1>
            </main>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
