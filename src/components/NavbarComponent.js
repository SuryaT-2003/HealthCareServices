import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    zIndex: 1000,
    backgroundColor: '#343a40', // Background color for visibility
    width: '100%', // Full width of the viewport
    height: '56px', // Fixed height
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Optional: Add shadow for better separation
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navbarStyle}>
      <div className="container">
        <Link className="navbar-brand" to="/">Healthcare Services</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
