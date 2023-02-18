import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Login from "./Login";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard/:username" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
