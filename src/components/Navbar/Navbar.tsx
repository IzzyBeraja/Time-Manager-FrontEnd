import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav flex-column sticky-top">
      <Link
        className="nav-link text-center border-bottom text-secondary"
        to="/account"
      >
        Izzy Beraja
      </Link>
      <Link className="nav-link border-bottom text-secondary" to="/">
        <i className="fas fa-keyboard mr-2" />
        Practice
      </Link>
      <Link className="nav-link border-bottom text-secondary" to="/profile">
        <i className="fas fa-chart-bar mr-2" />
        Profile
      </Link>
      <Link className="nav-link border-bottom text-secondary" to="/help">
        <i className="fas fa-question-circle mr-2" />
        Help
      </Link>
      <Link className="nav-link border-bottom text-secondary" to="/highscores">
        <i className="fas fa-trophy mr-2" />
        High Scores
      </Link>
      <Link className="nav-link border-bottom text-secondary" to="/layouts">
        <i className="fas fa-palette mr-2" />
        Layouts
      </Link>
    </nav>
  );
};

export default Navbar;
