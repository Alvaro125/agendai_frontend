import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="flex flex-row justify-center space-x-4">
                <li className="navbar-item">
                    <Link href="/" className="navbar-link hover:underline transition-all duration-300">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/about" className="navbar-link">About</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/services" className="navbar-link">Services</Link>
                </li>
                <li className="navbar-item">
                    <Link href="/contact" className="navbar-link">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;