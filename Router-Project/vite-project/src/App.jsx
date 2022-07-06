import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Manage from "./Components/Manage";
import Market from "./Components/Market";
import Start from "./Components/Start";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/start" element={<Start />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Manage" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
