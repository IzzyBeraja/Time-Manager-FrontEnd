import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <Link className="nav-link" to="/account">
        Izzy Beraja
      </Link>
      <Link className="nav-link" to="/">
        <i className="fas fa-keyboard" />
        Practice
      </Link>
      <Link className="nav-link" to="/profile">
        <i className="fas fa-chart-bar" />
        Profile
      </Link>
      <Link className="nav-link" to="/help">
        <i className="fas fa-question-circle" />
        Help
      </Link>
      <Link className="nav-link" to="/highscores">
        <i className="fas fa-trophy" />
        High Scores
      </Link>
      <Link className="nav-link" to="/layouts">
        <i className="fas fa-palette" />
        Layouts
      </Link>
    </nav>
  );
};

export default Navbar;
