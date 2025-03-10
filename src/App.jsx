import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import logo from "./assets/Logocommunion.png";
import "./App.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <header className="app-header">
        <nav className="nav-bar">
          <img src={logo} alt="Logo" className="logo" />

          <div className="nav-links">
            <Link to="/">Home </Link>
            <Link to="/events">Events</Link>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
        
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <X size={40} />
          </button>
          <nav>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/events" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
