import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import { useEffect } from "react";

function App() {

  useEffect(() => {

  }, []);
  return (
    <Routes>
      <Route path="/ResponsibleBoard" element={<Dashboard />} />
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
