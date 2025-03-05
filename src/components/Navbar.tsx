import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import './Navbar.css'; // Import the CSS file for styling

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/services" className="navbar-link">Services</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;