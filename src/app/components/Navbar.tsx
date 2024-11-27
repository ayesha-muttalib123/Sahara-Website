"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">Sahara Group</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">☰</span>
        </button>

        {/* Sidebar for Mobile */}
        <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={closeMenu}>
            &times;
          </button>
          <ul className="sidebar-menu">
            <li>
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
