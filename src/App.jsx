import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import logo from "./assets/Logocommunion.png";
import "./App.css";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import CreateEvent from "./pages/CreateEvents";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <BrowserRouter>
      <header className="app-header">
        <nav className="nav-bar">
          <img src={logo} alt="Logo" className="logo" />

          <div className="nav-links">
            <Link to="/">Home</Link>

            <div
              className="dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Events ▾
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/events" onClick={() => setDropdownOpen(false)}>
                    Upcoming Events
                  </Link>
                  <Link
                    to="/create-event"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Create Event
                  </Link>
                </div>
              )}
            </div>
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

            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Events ▾
              </button>
              {dropdownOpen && (
                <div className="mobile-dropdown-menu">
                  <Link to="/events" onClick={() => setMenuOpen(false)}>
                    Upcoming Events
                  </Link>
                  <Link to="/create-event" onClick={() => setMenuOpen(false)}>
                    Create Event
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
