import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Form from "./Form";
import Thanku from "./Thanku";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/thanku" element={<Thanku />} />
        </Routes>
      </Router>
    </>
  );
}
