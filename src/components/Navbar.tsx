import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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

    /*     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Timer App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            Features
          </a>
          <a className="nav-link" href="/">
            Pricing
          </a>
        </div>
      </div>
    </nav> */
  );
};

export default Navbar;
