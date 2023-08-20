import { Routes, Route } from "react-router-dom";
import "./App.css";

import SoftwareEngineer from "./pages/Software";
import Actress from "./pages/Actress";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/software" element={<SoftwareEngineer />} />
        <Route path="/actress" element={<Actress />} />
      </Routes>

    </div>
  );
}

export default App;
