import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ mode, setmode }) {
  const toggleTheme = () => {
    setmode(mode === "light" ? "dark" : "light");
  };

  const handleReset = () => {
    if (window.confirm("Reset all progress? This action is permanent.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <header className="navbar-main">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-logo">
            <span className="accent">DSA</span>TRACKER
          </Link>
        </div>
        <div className="nav-actions">
          <Link to="/add-question" className="action-btn add-btn">ADD QUESTION</Link>
          <button className="action-btn theme-btn" onClick={toggleTheme}>
            {mode === "light" ? "DARK MODE" : "LIGHT MODE"}
          </button>
          <button className="action-btn reset-btn" onClick={handleReset}>RESET DATA</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;