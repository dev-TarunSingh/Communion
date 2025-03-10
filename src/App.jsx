import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import logo from "./assets/Logocommunion.png"; // Import the logo
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <nav className="nav-bar">
          <img src={logo} alt="Logo" className="logo" /> {/* Add logo */}
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
        </nav>
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
