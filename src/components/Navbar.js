import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="navbar elegant-navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
          <span className="brand-main">SPG</span>
          <span className="brand-sub">Events</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            onClick={() => handleNavClick("/")}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => handleNavClick("/about")}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/service-selection"
            onClick={() => handleNavClick("/service-selection")}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Get Quotation
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => handleNavClick("/contact")}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
