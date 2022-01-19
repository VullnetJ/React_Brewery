import React from "react";

import HomePage from "./HomePage";
import DetailPage from "./DetailPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/HomePage"> Main Page </Link>
      </nav>
      <div>
        <Routes>
          <Route exact path="/HomePage/" element={<HomePage />} />
          <Route exact path="/DetailPage/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
