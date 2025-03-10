import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
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
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={40} />
        </button>
        <nav>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      </div>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
